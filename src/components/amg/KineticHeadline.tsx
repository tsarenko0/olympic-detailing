import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SCRAMBLE_GLYPHS =
  "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHJKLMNPQRSTUVWXYZ0123456789◆◇◈";
const PLACEHOLDER_GLYPH = "◆";
const SCRAMBLE_TICK_MS = 32;
const LOCK_STAGGER_MS = 38;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type HeadlineLine = {
  text: string;
  accent: boolean;
};

type LetterCell = {
  id: string;
  char: string;
  isSpace: boolean;
  accent: boolean;
  lineIndex: number;
  letterIndex: number;
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function randomGlyph(seed: number) {
  return SCRAMBLE_GLYPHS[seed % SCRAMBLE_GLYPHS.length] ?? "А";
}

function groupCellsIntoWords(cells: LetterCell[]) {
  const words: LetterCell[][] = [];
  let current: LetterCell[] = [];

  cells.forEach((cell) => {
    if (cell.isSpace) {
      if (current.length > 0) {
        words.push(current);
        current = [];
      }
      return;
    }
    current.push(cell);
  });

  if (current.length > 0) words.push(current);
  return words;
}

function buildCells(lines: readonly HeadlineLine[]): LetterCell[] {
  const cells: LetterCell[] = [];
  let letterIndex = 0;

  lines.forEach((line, lineIndex) => {
    [...line.text].forEach((char, charIndex) => {
      const isSpace = char === " ";
      cells.push({
        id: `${lineIndex}-${charIndex}`,
        char,
        isSpace,
        accent: line.accent,
        lineIndex,
        letterIndex: isSpace ? -1 : letterIndex++,
      });
    });
  });

  return cells;
}

export function KineticHeadline({
  lines,
  className,
}: {
  lines: readonly HeadlineLine[];
  className?: string;
}) {
  const cells = useMemo(() => buildCells(lines), [lines]);
  const letterCells = useMemo(() => cells.filter((cell) => !cell.isSpace), [cells]);
  const lineIndexes = useMemo(
    () => [...new Set(cells.map((cell) => cell.lineIndex))],
    [cells],
  );

  const glyphRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lockedFlags = useRef<boolean[]>([]);

  const [armed, setArmed] = useState(false);
  const [shockwave, setShockwave] = useState(false);

  useEffect(() => {
    const glyphs = glyphRefs.current;

    if (prefersReducedMotion()) {
      letterCells.forEach((cell, index) => {
        const glyph = glyphs[index];
        if (glyph) {
          glyph.textContent = cell.char;
          glyph.classList.remove("kinetic-letter-scrambling", "kinetic-letter-locked");
          if (cell.accent) glyph.classList.add("text-gradient-crimson");
        }
      });
      setArmed(true);
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let lastTick = 0;
    let scrambleSeed = Math.floor(Math.random() * 1000);
    const lockTimers: number[] = [];

    lockedFlags.current = letterCells.map(() => false);

    letterCells.forEach((_, index) => {
      const glyph = glyphs[index];
      if (!glyph) return;
      glyph.textContent = PLACEHOLDER_GLYPH;
      glyph.classList.add("kinetic-letter-scrambling");
      glyph.classList.remove("kinetic-letter-locked", "text-gradient-crimson");
    });

    setShockwave(false);
    setArmed(true);

    const tick = (time: number) => {
      if (cancelled) return;

      if (time - lastTick >= SCRAMBLE_TICK_MS) {
        lastTick = time;
        scrambleSeed += 17;

        for (let index = 0; index < letterCells.length; index += 1) {
          if (lockedFlags.current[index]) continue;
          const glyph = glyphs[index];
          if (!glyph) continue;
          glyph.textContent = randomGlyph(scrambleSeed + index * 13);
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    letterCells.forEach((cell, index) => {
      lockTimers.push(
        window.setTimeout(() => {
          if (cancelled) return;

          lockedFlags.current[index] = true;
          const glyph = glyphs[index];
          if (!glyph) return;

          glyph.textContent = cell.char;
          glyph.classList.remove("kinetic-letter-scrambling");
          glyph.classList.add("kinetic-letter-locked");
          if (cell.accent) glyph.classList.add("text-gradient-crimson");
        }, cell.letterIndex * LOCK_STAGGER_MS),
      );
    });

    const settleAt = letterCells.length * LOCK_STAGGER_MS + 420;
    lockTimers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        window.cancelAnimationFrame(rafId);
        setShockwave(true);
      }, settleAt),
    );

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      lockTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [letterCells]);

  const plainText = lines.map((line) => line.text).join(" ");

  return (
    <h1
      aria-label={plainText}
      className={cn(
        "kinetic-headline relative mt-6 max-w-full text-[clamp(1.85rem,8.2vw,4.5rem)] font-bold leading-[1.05]",
        armed && "kinetic-headline-armed",
        shockwave && "kinetic-headline-shockwave",
        className,
      )}
    >
      {lineIndexes.map((lineIndex) => {
        const lineCells = cells.filter((cell) => cell.lineIndex === lineIndex);
        const words = groupCellsIntoWords(lineCells);

        return (
          <span key={lines[lineIndex]?.text ?? lineIndex} className="kinetic-line">
            {words.map((word, wordIndex) => (
              <span key={`${lineIndex}-word-${wordIndex}`}>
                <span className="kinetic-word">
                  {word.map((cell) => (
                    <span key={cell.id} aria-hidden className="kinetic-letter">
                      <span className="kinetic-letter-sizer">{cell.char}</span>
                      <span
                        ref={(node) => {
                          glyphRefs.current[cell.letterIndex] = node;
                        }}
                        className="kinetic-letter-glyph kinetic-letter-scrambling"
                        onAnimationEnd={(event) => {
                          if (event.animationName !== "kinetic-lock") return;
                          event.currentTarget.classList.remove("kinetic-letter-locked");
                        }}
                      >
                        {PLACEHOLDER_GLYPH}
                      </span>
                    </span>
                  ))}
                </span>
                {wordIndex < words.length - 1 ? (
                  <span className="kinetic-space" aria-hidden>
                    {" "}
                  </span>
                ) : null}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}

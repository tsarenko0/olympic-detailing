import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export type RevealVariant = "up" | "left" | "right" | "scale" | "cascade";

const VARIANT_PENDING: Record<RevealVariant, string> = {
  up: "reveal-pending",
  left: "reveal-pending reveal-pending-left",
  right: "reveal-pending reveal-pending-right",
  scale: "reveal-pending reveal-pending-scale",
  cascade: "reveal-pending reveal-pending-cascade",
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const { ref, armed, visible } = useReveal<HTMLDivElement>();

  return (
    <As
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "reveal",
        armed && !visible && VARIANT_PENDING[variant],
        visible && "reveal-in",
        className,
      )}
    >
      {children}
    </As>
  );
}

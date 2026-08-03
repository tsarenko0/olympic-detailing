import { Link } from "@tanstack/react-router";
import { PRIVACY_PATH } from "@/lib/amg-data";
import { cn } from "@/lib/utils";

export function PrivacyNote({
  className,
  variant = "form",
}: {
  className?: string;
  variant?: "form" | "link";
}) {
  if (variant === "link") {
    return (
      <p className={cn("text-[11px] leading-relaxed text-muted-foreground", className)}>
        <Link to={PRIVACY_PATH} className="underline underline-offset-2 transition-colors hover:text-primary">
          Политика конфиденциальности
        </Link>
      </p>
    );
  }

  return (
    <p className={cn("text-[11px] leading-relaxed text-muted-foreground", className)}>
      Нажимая кнопку, вы соглашаетесь с{" "}
      <Link to={PRIVACY_PATH} className="underline underline-offset-2 transition-colors hover:text-primary">
        политикой конфиденциальности
      </Link>
      .
    </p>
  );
}

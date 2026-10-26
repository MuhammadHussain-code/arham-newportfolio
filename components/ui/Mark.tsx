import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The flame-A mark. The magazine program hides it once in every view as a
 * small found landmark; sections place it with `data-mark` so the page-turn
 * reveal shows it last.
 */
export function Mark({ className, size = 20, hidden = true }: { className?: string; size?: number; hidden?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={size}
      height={size}
      data-mark={hidden ? "" : undefined}
      className={cn("inline-block select-none", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

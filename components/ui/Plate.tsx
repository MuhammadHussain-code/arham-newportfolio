import Image from "next/image";
import { cn } from "@/lib/utils";

type Shape = "disc" | "quadrant" | "wave" | "slab";

/* Hard-edged abstract shapes at the scale the program paints them: each owns a
   real share of the panel, and the screenshot sits over its right-hand field. */
const shapes: Record<Shape, React.ReactNode> = {
  disc: <circle cx="30" cy="34" r="44" />,
  quadrant: <path d="M0 0H62A62 62 0 0 1 0 62Z" />,
  wave: <path d="M0 0H100V30C80 52 58 18 36 42S10 70 0 56Z" />,
  slab: <path d="M-10 70 110 10V46L-10 108Z" />,
};

/**
 * Commissioned-art panel: black ground, one spot shape, the screenshot as the
 * plate. The program allows only commissioned artwork as imagery; in this
 * issue the shipped product is the artwork. Printed flat: no gloss, no rim.
 */
export function Plate({
  src,
  alt,
  width,
  height,
  shape = "disc",
  className,
  imgClassName,
  sizes,
  priority,
  aspect = "4 / 3",
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  shape?: Shape;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  aspect?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure className={cn("relative isolate overflow-hidden bg-ink", className)} style={{ aspectRatio: aspect }}>
      <svg className="absolute inset-0 h-full w-full text-spot" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" fill="currentColor">
        {shapes[shape]}
      </svg>
      <div className="absolute inset-[15%_6%_9%_24%] overflow-hidden">
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className={cn("h-full w-full object-contain object-top", imgClassName)} />
      </div>
      {children}
    </figure>
  );
}

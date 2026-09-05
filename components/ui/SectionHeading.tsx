import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  id?: string;
  script: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, script, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="font-script text-accent text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] leading-none mb-3" aria-hidden="true">
        {script}
      </p>
      <h2 id={id} className="font-display font-bold text-h2 text-foreground">{title}</h2>
      {description ? <p className="mt-5 text-muted text-lead max-w-2xl">{description}</p> : null}
    </Reveal>
  );
}

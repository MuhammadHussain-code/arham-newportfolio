import { cn } from "@/lib/utils";
import { PageTurn } from "@/components/motion/PageTurn";

/**
 * A department opener: heavy rule, the department title in the display face,
 * an optional standfirst beside it. The rule is the structure; no kicker.
 */
export function Department({
  id,
  title,
  standfirst,
  aside,
  className,
}: {
  id?: string;
  title: string;
  standfirst?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <PageTurn className={cn("rule-heavy pt-5", className)}>
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <h2 id={id} className="text-dept md:col-span-5">
          {title}
        </h2>
        {standfirst ? <p className="text-lede text-ink-soft md:col-span-5 md:pt-2 measure">{standfirst}</p> : null}
        {aside ? <div className="md:col-span-2 md:col-start-11 md:justify-self-end md:pt-2">{aside}</div> : null}
      </div>
    </PageTurn>
  );
}

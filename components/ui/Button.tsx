import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mark } from "@/components/ui/Mark";

type Variant = "spot" | "outline" | "ink";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden font-label text-[0.75rem] font-medium uppercase tracking-[0.16em] whitespace-nowrap transition-[background-color,color,border-color,padding] duration-300 ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-spot focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  spot: "bg-spot text-on-spot hover:bg-spot-deep",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ink: "bg-ink text-paper hover:bg-spot",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4",
  md: "h-12 px-6",
  lg: "h-14 px-8 text-[0.8125rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Show the found mark sliding in at the left edge on hover (the program's active state). */
  mark?: boolean;
};

type ButtonAsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function Inner({ children, mark }: { children: React.ReactNode; mark: boolean }) {
  return (
    <>
      {mark ? (
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 -translate-x-[220%] opacity-0 transition-[transform,opacity] duration-300 ease-[var(--ease-out)] group-hover/btn:translate-x-0 group-hover/btn:opacity-100 group-focus-visible/btn:translate-x-0 group-focus-visible/btn:opacity-100"
          aria-hidden="true"
        >
          <Mark size={16} hidden={false} />
        </span>
      ) : null}
      <span className={cn("inline-flex items-center gap-2 transition-transform duration-300 ease-[var(--ease-out)]", mark && "group-hover/btn:translate-x-2.5 group-focus-visible/btn:translate-x-2.5")}>
        {children}
      </span>
    </>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "spot", size = "md", className, children, mark = true } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, mark: _m, ...anchorProps } = props;
    const plainAnchor = /^https?:|^mailto:|^#|\.[a-z0-9]{2,5}$/i.test(href);
    if (plainAnchor) {
      return (
        <a href={href} className={classes} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...anchorProps}>
          <Inner mark={mark}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        <Inner mark={mark}>{children}</Inner>
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, mark: _m, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      <Inner mark={mark}>{children}</Inner>
    </button>
  );
}

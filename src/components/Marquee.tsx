import clsx from "clsx";
import { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
  trackClassName?: string;
};

export function Marquee({ items, className, trackClassName }: MarqueeProps) {
  const repeated = [...items, ...items];

  return (
    <div className={clsx("overflow-hidden", className)}>
      <div
        className={clsx(
          "flex min-w-max animate-marquee whitespace-nowrap gap-12",
          trackClassName,
        )}
      >
        {repeated.map((item, index) => (
          <div key={index} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

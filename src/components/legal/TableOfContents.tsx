import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { LegalSection } from "@/types/legal";

interface TableOfContentsProps {
  sections: LegalSection[];
}

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">On this page</p>
        <ul className="space-y-1 border-l-2 border-border">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "block py-2 pl-4 text-sm transition-colors border-l-2 -ml-[2px]",
                  activeId === id
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30",
                )}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;

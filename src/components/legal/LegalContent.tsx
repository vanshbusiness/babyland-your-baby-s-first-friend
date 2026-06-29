import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const LegalP = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("text-muted-foreground leading-relaxed mb-4", className)}>{children}</p>
);

export const LegalUl = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i} className="leading-relaxed">
        {item}
      </li>
    ))}
  </ul>
);

export const LegalOl = ({ items }: { items: ReactNode[] }) => (
  <ol className="list-decimal pl-6 space-y-2 mb-4 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i} className="leading-relaxed">
        {item}
      </li>
    ))}
  </ol>
);

export const LegalStrong = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

export const LegalCard = ({ children, title }: { children: ReactNode; title?: string }) => (
  <div className="bg-card rounded-2xl border border-border p-6 shadow-soft mb-4">
    {title && <h4 className="font-bold text-foreground mb-3">{title}</h4>}
    {children}
  </div>
);

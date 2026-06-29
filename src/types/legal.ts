import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface LegalPageConfig {
  title: string;
  description: string;
  keywords: string;
  path: string;
  lastUpdated?: string;
  subtitle?: string;
  icon?: LucideIcon;
  sections: LegalSection[];
  structuredDataType?: "WebPage" | "FAQPage" | "ContactPage" | "AboutPage";
}

import LegalPageLayout from "@/components/legal/LegalPageLayout";
import type { LegalPageConfig } from "@/types/legal";

const createLegalPage = (config: LegalPageConfig) => {
  const Page = () => <LegalPageLayout config={config} />;
  Page.displayName = config.title.replace(/\s+/g, "");
  return Page;
};

export { createLegalPage };

import { motion } from "framer-motion";
import { Calendar, FileText } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import TableOfContents from "./TableOfContents";
import PageLayout from "./PageLayout";
import type { LegalPageConfig } from "@/types/legal";
import { COMPANY } from "@/lib/company";

interface LegalPageLayoutProps {
  config: LegalPageConfig;
}

const LegalPageLayout = ({ config }: LegalPageLayoutProps) => {
  const Icon = config.icon ?? FileText;
  const lastUpdated = config.lastUpdated ?? COMPANY.lastUpdated;

  return (
    <PageLayout>
      <SEO
        title={config.title}
        description={config.description}
        keywords={config.keywords}
        path={config.path}
        structuredData={{
          "@context": "https://schema.org",
          "@type": config.structuredDataType ?? "WebPage",
          name: config.title,
          description: config.description,
          url: `${COMPANY.website}${config.path}`,
          dateModified: lastUpdated,
          publisher: {
            "@type": "Organization",
            name: COMPANY.name,
            url: COMPANY.website,
          },
        }}
      />

      {/* Hero */}
      <section className="relative py-12 md:py-16 bg-hero-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blush-light rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-mint-light rounded-full blur-3xl opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{config.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-mint-light text-secondary-foreground font-semibold text-xs">
                Legal & Policy
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              {config.title}
            </h1>
            {config.subtitle && (
              <p className="text-lg text-muted-foreground mb-4">{config.subtitle}</p>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 xl:gap-16 max-w-6xl mx-auto">
            <TableOfContents sections={config.sections} />

            <article className="min-w-0">
              {config.sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="scroll-mt-28 mb-12"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    {section.title}
                  </h2>
                  <div>{section.content}</div>
                </motion.section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalPageLayout;

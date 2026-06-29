import { useEffect } from "react";
import { COMPANY } from "@/lib/company";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  structuredData?: Record<string, unknown>;
}

const setMeta = (name: string, content: string, property = false) => {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

const SEO = ({ title, description, keywords, path, structuredData }: SEOProps) => {
  const canonical = `${COMPANY.website}${path}`;
  const fullTitle = title.includes("Babyland") ? title : `${title} | Babyland`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:type", "website", true);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setLink("canonical", canonical);

    const scriptId = "babyland-json-ld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const defaultData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description,
      url: canonical,
      publisher: {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.website,
      },
    };

    script.textContent = JSON.stringify(structuredData ?? defaultData);
  }, [fullTitle, description, keywords, canonical, structuredData]);

  return null;
};

export default SEO;

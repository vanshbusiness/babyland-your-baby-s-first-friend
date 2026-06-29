import { Cookie } from "lucide-react";
import { LegalP, LegalUl, LegalStrong, LegalCard } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const cookiesConfig: LegalPageConfig = {
  title: "Cookies Policy",
  description:
    "Learn how Babyland uses cookies, local storage, and similar technologies on our website and mobile applications.",
  keywords: "Babyland cookies policy, web cookies, tracking technologies, cookie consent, analytics cookies",
  path: "/cookies",
  icon: Cookie,
  subtitle: "This policy explains how we use cookies and similar tracking technologies.",
  sections: [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      content: (
        <LegalP>
          Cookies are small text files stored on your device when you visit a website or use an app. They help us
          recognize your device, remember preferences, and improve your experience. Similar technologies include local
          storage, session storage, and device identifiers used in mobile applications.
        </LegalP>
      ),
    },
    {
      id: "cookies-we-use",
      title: "Cookies & Technologies We Use",
      content: (
        <>
          <LegalCard title="Essential Cookies">
            <LegalP>Required for the platform to function. Cannot be disabled.</LegalP>
            <LegalUl
              items={[
                "Authentication session tokens to keep you logged in",
                "Security cookies to prevent cross-site request forgery",
                "Load balancing cookies for service reliability",
              ]}
            />
          </LegalCard>
          <LegalCard title="Functional Cookies">
            <LegalP>Remember your preferences and settings.</LegalP>
            <LegalUl
              items={[
                "Language and locale preferences",
                "Notification settings and display preferences",
                "Recently viewed sections and dashboard layout",
              ]}
            />
          </LegalCard>
          <LegalCard title="Analytics Cookies">
            <LegalP>Help us understand how users interact with our Services.</LegalP>
            <LegalUl
              items={[
                "Firebase Analytics — aggregated usage patterns and feature adoption",
                "Google Analytics (website only) — page views, session duration, traffic sources",
                "Crash reporting identifiers via Firebase Crashlytics",
              ]}
            />
          </LegalCard>
        </>
      ),
    },
    {
      id: "mobile-app",
      title: "Mobile App Technologies",
      content: (
        <>
          <LegalP>Our mobile app uses equivalent technologies instead of browser cookies:</LegalP>
          <LegalUl
            items={[
              "Secure local storage for authentication tokens and cached data",
              "Firebase Cloud Messaging tokens for push notifications",
              "Device identifiers for analytics and crash reporting (anonymized where possible)",
              "App preferences stored locally on your device",
            ]}
          />
        </>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Cookies",
      content: (
        <LegalP>
          Third-party services integrated into our platform may set their own cookies, including Firebase/Google,
          payment processors, and embedded content. We do not control third-party cookies. Please review their
          respective privacy policies.
        </LegalP>
      ),
    },
    {
      id: "managing",
      title: "Managing Cookies & Preferences",
      content: (
        <>
          <LegalUl
            items={[
              "Browser settings: Most browsers allow you to block or delete cookies through settings",
              "Mobile app: Disable analytics in app Settings → Privacy → Analytics",
              "Opt-out of Google Analytics: Visit tools.google.com/dlpage/gaoptout",
              "Note: Disabling essential cookies may prevent you from using certain features",
            ]}
          />
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <LegalP>
          Questions about our use of cookies? Contact {COMPANY.email.privacy}.
        </LegalP>
      ),
    },
  ],
};

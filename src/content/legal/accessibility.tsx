import { Accessibility } from "lucide-react";
import { LegalP, LegalUl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const accessibilityConfig: LegalPageConfig = {
  title: "Accessibility Statement",
  description:
    "Babyland's commitment to digital accessibility including WCAG compliance goals, assistive technology support, and feedback channels.",
  keywords: "Babyland accessibility, WCAG, digital accessibility, inclusive design, assistive technology",
  path: "/accessibility",
  icon: Accessibility,
  subtitle: "Our commitment to making Babyland accessible to everyone.",
  sections: [
    {
      id: "commitment",
      title: "Our Commitment",
      content: (
        <LegalP>
          Babyland is committed to ensuring digital accessibility for people with disabilities. We continually improve
          the user experience for everyone and apply relevant accessibility standards to our website and mobile
          applications.
        </LegalP>
      ),
    },
    {
      id: "standards",
      title: "Accessibility Standards",
      content: (
        <>
          <LegalP>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, including:</LegalP>
          <LegalUl
            items={[
              "Perceivable — text alternatives, captions, sufficient color contrast, resizable text",
              "Operable — keyboard navigation, sufficient time, seizure-safe animations, navigable structure",
              "Understandable — readable text, predictable navigation, input assistance and error identification",
              "Robust — compatibility with current and future assistive technologies",
            ]}
          />
        </>
      ),
    },
    {
      id: "features",
      title: "Accessibility Features",
      content: (
        <LegalUl
          items={[
            "Semantic HTML structure with proper heading hierarchy",
            "Alternative text for meaningful images",
            "Keyboard-accessible navigation and interactive elements",
            "Focus indicators for interactive components",
            "Color contrast ratios meeting WCAG AA standards",
            "Responsive design supporting zoom up to 200% without loss of functionality",
            "Screen reader compatible labels and ARIA attributes on key components",
            "Reduced motion support respecting prefers-reduced-motion settings",
          ]}
        />
      ),
    },
    {
      id: "mobile",
      title: "Mobile App Accessibility",
      content: (
        <LegalUl
          items={[
            "Support for platform accessibility features (TalkBack on Android, VoiceOver on iOS)",
            "Scalable text respecting system font size settings",
            "Touch targets meeting minimum size requirements (44x44 dp)",
            "High contrast mode compatibility",
          ]}
        />
      ),
    },
    {
      id: "known-issues",
      title: "Known Limitations",
      content: (
        <LegalP>
          We are actively working to improve accessibility across all areas. Some third-party embedded content may not
          fully meet accessibility standards. We monitor these integrations and advocate for improvements with our
          partners.
        </LegalP>
      ),
    },
    {
      id: "feedback",
      title: "Feedback & Assistance",
      content: (
        <>
          <LegalP>
            We welcome your feedback on the accessibility of Babyland. If you encounter accessibility barriers or need
            assistance:
          </LegalP>
          <LegalUl
            items={[
              <>Email: {COMPANY.email.support}</>,
              <>Subject line: "Accessibility Feedback"</>,
              <>We aim to respond within 5 business days</>,
            ]}
          />
        </>
      ),
    },
    {
      id: "assessment",
      title: "Assessment Approach",
      content: (
        <LegalP>
          We evaluate accessibility through automated testing tools, manual testing with assistive technologies, and
          user feedback. Regular audits are conducted as part of our development process.
        </LegalP>
      ),
    },
  ],
};

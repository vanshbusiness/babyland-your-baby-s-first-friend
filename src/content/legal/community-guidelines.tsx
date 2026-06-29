import { Users } from "lucide-react";
import { LegalP, LegalUl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const communityGuidelinesConfig: LegalPageConfig = {
  title: "Community Guidelines",
  description:
    "Standards of conduct for all Babyland users including parents, teachers, and school administrators to maintain a safe, respectful community.",
  keywords: "Babyland community guidelines, user conduct, respectful communication, childcare platform rules",
  path: "/community-guidelines",
  icon: Users,
  subtitle: "Guidelines for creating a safe, respectful, and supportive environment for everyone.",
  sections: [
    {
      id: "purpose",
      title: "Purpose",
      content: (
        <LegalP>
          Babyland connects parents, teachers, and school administrators in a shared space focused on children's care
          and development. These Community Guidelines define expected behavior to keep our platform safe, professional,
          and welcoming for all.
        </LegalP>
      ),
    },
    {
      id: "respect",
      title: "Be Respectful",
      content: (
        <LegalUl
          items={[
            "Treat all users — parents, staff, and administrators — with courtesy and respect",
            "Use professional language in all communications",
            "Respect cultural, religious, and personal differences",
            "Do not engage in harassment, bullying, discrimination, or intimidation",
            "Disagreements should be addressed constructively through appropriate channels",
          ]}
        />
      ),
    },
    {
      id: "child-focused",
      title: "Keep It Child-Focused",
      content: (
        <LegalUl
          items={[
            "All platform interactions should relate to childcare, education, and child wellbeing",
            "Do not use the platform for personal disputes unrelated to childcare",
            "Protect children's dignity — never post embarrassing, harmful, or inappropriate content involving children",
            "Follow photo consent requirements before sharing any child's image",
          ]}
        />
      ),
    },
    {
      id: "privacy",
      title: "Respect Privacy",
      content: (
        <LegalUl
          items={[
            "Do not share other users' personal information outside the platform",
            "Do not screenshot or redistribute content from the app without permission",
            "Do not access information about children not in your care or class",
            "Report privacy violations to the school administrator or Babyland support",
          ]}
        />
      ),
    },
    {
      id: "prohibited",
      title: "Prohibited Behavior",
      content: (
        <LegalUl
          items={[
            "Sharing inappropriate, violent, or sexually explicit content",
            "Impersonating another user or creating fake accounts",
            "Spamming, soliciting, or advertising unrelated products/services",
            "Attempting to contact children directly through the platform",
            "Sharing login credentials or allowing unauthorized access to your account",
            "Using the platform to stalk, monitor, or harass any individual",
            "Uploading malware or attempting to compromise platform security",
          ]}
        />
      ),
    },
    {
      id: "reporting",
      title: "Reporting Violations",
      content: (
        <>
          <LegalP>If you witness a violation of these guidelines:</LegalP>
          <LegalUl
            items={[
              "Use the in-app report feature on the offending content or profile",
              `Contact your school administrator for school-related issues`,
              `Email ${COMPANY.email.abuse} for platform-wide violations`,
              `For child safety emergencies, email ${COMPANY.email.safety}`,
            ]}
          />
        </>
      ),
    },
    {
      id: "enforcement",
      title: "Enforcement",
      content: (
        <LegalUl
          items={[
            "First violation: Warning and content removal",
            "Repeated violations: Temporary account suspension",
            "Severe violations: Permanent account termination and potential legal action",
            "Schools may impose additional conduct policies for their staff and community",
          ]}
        />
      ),
    },
    {
      id: "contact",
      title: "Questions",
      content: (
        <LegalP>
          Questions about these guidelines? Contact {COMPANY.email.support}.
        </LegalP>
      ),
    },
  ],
};

import { Ban } from "lucide-react";
import { LegalP, LegalUl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const acceptableUseConfig: LegalPageConfig = {
  title: "Acceptable Use Policy",
  description:
    "Rules and restrictions for using the Babyland platform, including permitted activities, prohibited conduct, and enforcement actions.",
  keywords: "Babyland acceptable use policy, AUP, platform usage rules, prohibited activities",
  path: "/acceptable-use",
  icon: Ban,
  subtitle: "Terms governing acceptable use of Babyland's platform and services.",
  sections: [
    {
      id: "scope",
      title: "Scope",
      content: (
        <LegalP>
          This Acceptable Use Policy ("AUP") applies to all users of Babyland's Services, including school
          administrators, teachers, staff, parents, and guardians. Use of the Services constitutes acceptance of this
          AUP.
        </LegalP>
      ),
    },
    {
      id: "permitted",
      title: "Permitted Use",
      content: (
        <LegalUl
          items={[
            "Managing childcare operations including attendance, reports, and communication",
            "Sharing authorized photos and videos of enrolled children with consenting parents",
            "Processing legitimate school fee payments",
            "Communicating with authorized parents and staff about enrolled children",
            "Generating reports and analytics for school administration",
            "Accessing the platform through official Babyland apps and website only",
          ]}
        />
      ),
    },
    {
      id: "prohibited",
      title: "Prohibited Activities",
      content: (
        <>
          <LegalP>You may not use Babyland to:</LegalP>
          <LegalUl
            items={[
              "Violate any applicable law, regulation, or third-party rights",
              "Upload content that is illegal, harmful, threatening, abusive, or exploitative",
              "Collect or harvest personal information of users without authorization",
              "Interfere with or disrupt the integrity or performance of the Services",
              "Attempt to gain unauthorized access to any systems, accounts, or data",
              "Reverse engineer, decompile, or disassemble any part of the platform",
              "Use automated scripts, bots, or scrapers to access the Services",
              "Resell, sublicense, or redistribute access to the Services without authorization",
              "Use the platform for any purpose other than legitimate childcare management",
              "Circumvent security measures or access controls",
            ]}
          />
        </>
      ),
    },
    {
      id: "content-standards",
      title: "Content Standards",
      content: (
        <LegalP>
          All content uploaded must comply with our{" "}
          <a href="/community-guidelines" className="text-primary hover:underline">
            Community Guidelines
          </a>{" "}
          and{" "}
          <a href="/child-safety" className="text-primary hover:underline">
            Child Safety Standards
          </a>
          . Babyland reserves the right to remove any content that violates these standards without notice.
        </LegalP>
      ),
    },
    {
      id: "security",
      title: "Security Responsibilities",
      content: (
        <LegalUl
          items={[
            "Maintain strong, unique passwords for your account",
            "Enable available security features (two-factor authentication when available)",
            "Report suspected security breaches immediately to support@babyland.app",
            "Do not share account credentials with unauthorized individuals",
            "Log out of shared or public devices after use",
          ]}
        />
      ),
    },
    {
      id: "enforcement",
      title: "Enforcement & Consequences",
      content: (
        <>
          <LegalP>Violations may result in:</LegalP>
          <LegalUl
            items={[
              "Content removal without prior notice",
              "Temporary or permanent account suspension",
              "Termination of school subscription",
              "Reporting to law enforcement for illegal activities",
              "Legal action to recover damages",
            ]}
          />
        </>
      ),
    },
    {
      id: "reporting",
      title: "Reporting Violations",
      content: (
        <LegalP>
          Report AUP violations to {COMPANY.email.abuse}. Include details of the violation, relevant screenshots, and
          affected account information.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <LegalP>Questions about this policy: {COMPANY.email.legal}</LegalP>
      ),
    },
  ],
};

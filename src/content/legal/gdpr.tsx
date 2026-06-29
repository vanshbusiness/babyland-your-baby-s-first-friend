import { Globe } from "lucide-react";
import { LegalP, LegalUl, LegalStrong, LegalCard } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const gdprConfig: LegalPageConfig = {
  title: "GDPR Compliance",
  description:
    "Babyland's compliance with the EU General Data Protection Regulation (GDPR) including your rights, legal bases, and data processing details.",
  keywords: "Babyland GDPR, EU data protection, GDPR rights, data controller, DPO, European privacy",
  path: "/gdpr",
  icon: Globe,
  subtitle: "Our commitment to compliance with the General Data Protection Regulation (EU) 2016/679.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: (
        <LegalP>
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, the General Data
          Protection Regulation (GDPR) provides you with specific rights regarding your personal data. Babyland is
          committed to full GDPR compliance.
        </LegalP>
      ),
    },
    {
      id: "roles",
      title: "Data Controller & Processor Roles",
      content: (
        <>
          <LegalCard title="Babyland as Data Controller">
            <LegalP>For account data, platform usage data, and billing information.</LegalP>
          </LegalCard>
          <LegalCard title="School as Data Controller">
            <LegalP>
              For child records, attendance, daily reports, and school-specific content. Babyland acts as a Data
              Processor on behalf of schools for this data.
            </LegalP>
          </LegalCard>
          <LegalP>
            Our Data Processing Agreement (DPA) is available to schools upon request at {COMPANY.email.dpo}.
          </LegalP>
        </>
      ),
    },
    {
      id: "legal-basis",
      title: "Legal Bases for Processing",
      content: (
        <LegalUl
          items={[
            <>
              <LegalStrong>Contract:</LegalStrong> Processing necessary to provide Services you've subscribed to
            </>,
            <>
              <LegalStrong>Consent:</LegalStrong> Photo sharing, marketing communications, optional analytics
            </>,
            <>
              <LegalStrong>Legitimate Interest:</LegalStrong> Platform security, fraud prevention, service improvement
            </>,
            <>
              <LegalStrong>Legal Obligation:</LegalStrong> Compliance with applicable laws and regulations
            </>,
          ]}
        />
      ),
    },
    {
      id: "your-rights",
      title: "Your GDPR Rights",
      content: (
        <>
          <LegalUl
            items={[
              "Right of Access — request a copy of your personal data",
              "Right to Rectification — correct inaccurate data",
              "Right to Erasure — request deletion ('right to be forgotten')",
              "Right to Restrict Processing — limit how we use your data",
              "Right to Data Portability — receive data in a portable format",
              "Right to Object — object to processing based on legitimate interests",
              "Rights Related to Automated Decision-Making — we do not make solely automated decisions with legal effects",
            ]}
          />
          <LegalP>
            Exercise your rights by contacting {COMPANY.email.dpo}. We respond within 30 days. See our{" "}
            <a href="/data-deletion" className="text-primary hover:underline">
              Data Deletion Policy
            </a>{" "}
            for erasure requests.
          </LegalP>
        </>
      ),
    },
    {
      id: "transfers",
      title: "International Data Transfers",
      content: (
        <LegalP>
          When personal data is transferred outside the EEA, we implement appropriate safeguards including Standard
          Contractual Clauses (SCCs) approved by the European Commission, and ensure recipients maintain adequate
          protection levels.
        </LegalP>
      ),
    },
    {
      id: "breach",
      title: "Data Breach Notification",
      content: (
        <LegalP>
          In the event of a personal data breach posing risk to your rights, we will notify the relevant supervisory
          authority within 72 hours and affected individuals without undue delay, as required by GDPR Article 33 and 34.
        </LegalP>
      ),
    },
    {
      id: "dpo",
      title: "Data Protection Officer",
      content: (
        <LegalUl
          items={[
            <>DPO Email: {COMPANY.email.dpo}</>,
            <>Privacy Team: {COMPANY.email.privacy}</>,
            <>Address: {COMPANY.address}</>,
          ]}
        />
      ),
    },
    {
      id: "supervisory",
      title: "Supervisory Authority",
      content: (
        <LegalP>
          You have the right to lodge a complaint with your local data protection supervisory authority if you believe
          our processing of your personal data violates GDPR.
        </LegalP>
      ),
    },
  ],
};

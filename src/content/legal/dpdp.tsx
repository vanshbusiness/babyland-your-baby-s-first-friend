import { Landmark } from "lucide-react";
import { LegalP, LegalUl, LegalStrong, LegalCard } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const dpdpConfig: LegalPageConfig = {
  title: "DPDP Act Compliance",
  description:
    "Babyland's compliance with India's Digital Personal Data Protection Act 2023 (DPDP Act) including data principal rights and consent requirements.",
  keywords: "Babyland DPDP Act, India data protection, Digital Personal Data Protection Act, data principal rights",
  path: "/dpdp",
  icon: Landmark,
  subtitle: "Compliance with the Digital Personal Data Protection Act, 2023 (India).",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: (
        <LegalP>
          The Digital Personal Data Protection Act, 2023 (DPDP Act) governs the processing of digital personal data in
          India. As a Significant Data Fiduciary operating a platform involving children's data, Babyland maintains
          rigorous compliance with the DPDP Act and its rules.
        </LegalP>
      ),
    },
    {
      id: "roles",
      title: "Data Fiduciary & Processor",
      content: (
        <>
          <LegalCard title="Babyland as Data Fiduciary">
            <LegalP>For user account data, platform analytics, and service-related processing.</LegalP>
          </LegalCard>
          <LegalCard title="School as Data Fiduciary">
            <LegalP>
              For child-related records and school operational data. Babyland processes this data as a Data Processor
              under the school's instructions.
            </LegalP>
          </LegalCard>
        </>
      ),
    },
    {
      id: "consent",
      title: "Consent Requirements",
      content: (
        <LegalUl
          items={[
            "Free, specific, informed, unconditional, and unambiguous consent for data processing",
            "Separate consent for children's data (obtained from verifiable parent/guardian)",
            "Consent obtained in clear language available in English and Hindi",
            "Easy mechanism to withdraw consent at any time",
            "Consent records maintained with timestamp and scope",
          ]}
        />
      ),
    },
    {
      id: "children-data",
      title: "Processing of Children's Data",
      content: (
        <>
          <LegalP>
            The DPDP Act requires verifiable parental consent before processing personal data of children under 18.
            Babyland implements:
          </LegalP>
          <LegalUl
            items={[
              "Parent/guardian verification before child profile creation",
              "No behavioral tracking or targeted advertising directed at children",
              "No processing that could cause detrimental effect on children's wellbeing",
              "Enhanced security measures for all children's personal data",
            ]}
          />
        </>
      ),
    },
    {
      id: "rights",
      title: "Rights of Data Principals",
      content: (
        <>
          <LegalP>Under the DPDP Act, you have the right to:</LegalP>
          <LegalUl
            items={[
              "Access information about personal data being processed and sharing details",
              "Correction, completion, updating, and erasure of personal data",
              "Grievance redressal through our designated Grievance Officer",
              "Nominate another individual to exercise rights in case of death or incapacity",
            ]}
          />
          <LegalP>
            Submit requests to {COMPANY.email.dpo}. We respond within the timeline prescribed by the DPDP Act rules.
          </LegalP>
        </>
      ),
    },
    {
      id: "obligations",
      title: "Our Obligations as Data Fiduciary",
      content: (
        <LegalUl
          items={[
            "Process data only for lawful purposes with valid consent or legitimate use",
            "Implement reasonable security safeguards to prevent data breaches",
            "Report personal data breaches to the Data Protection Board of India",
            "Delete personal data upon withdrawal of consent or fulfillment of purpose",
            "Appoint a Data Protection Officer and Grievance Officer",
            "Conduct Data Protection Impact Assessments for high-risk processing",
          ]}
        />
      ),
    },
    {
      id: "cross-border",
      title: "Cross-Border Data Transfer",
      content: (
        <LegalP>
          Transfer of personal data outside India complies with DPDP Act requirements. We transfer data only to
          countries notified by the Central Government or under approved contractual safeguards.
        </LegalP>
      ),
    },
    {
      id: "grievance",
      title: "Grievance Officer",
      content: (
        <LegalUl
          items={[
            <>Grievance Officer: {COMPANY.email.dpo}</>,
            <>Response timeline: Within 30 days of receipt</>,
            <>Address: {COMPANY.address}</>,
          ]}
        />
      ),
    },
  ],
};

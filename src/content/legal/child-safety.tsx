import { ShieldAlert } from "lucide-react";
import { LegalP, LegalUl, LegalOl, LegalStrong, LegalCard } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const childSafetyConfig: LegalPageConfig = {
  title: "Child Safety Standards Policy",
  description:
    "Babyland's commitment to child safety including data protection, staff verification, safe communication, media guidelines, and abuse reporting procedures.",
  keywords:
    "Babyland child safety, childcare safety standards, Google Play child safety, abuse reporting, teacher verification, COPPA",
  path: "/child-safety",
  icon: ShieldAlert,
  subtitle: "Protecting children is our highest priority. This policy outlines our comprehensive child safety framework.",
  sections: [
    {
      id: "commitment",
      title: "Our Commitment",
      content: (
        <LegalP>
          Babyland is built for environments where children's safety and wellbeing are paramount. We maintain rigorous
          standards aligned with Google Play Child Safety policies, COPPA, and industry best practices for childcare
          technology platforms.
        </LegalP>
      ),
    },
    {
      id: "children-data",
      title: "Protection of Children's Data",
      content: (
        <>
          <LegalUl
            items={[
              "Child profiles are created only by verified parents/guardians or authorized school administrators",
              "Children's personal information is never used for advertising or marketing",
              "Access to child data is restricted to authorized parents and verified school staff",
              "All child-related data is encrypted in transit and at rest",
              "Data minimization: we collect only information necessary for childcare management",
              "Parents can review, export, or request deletion of their child's data at any time",
            ]}
          />
        </>
      ),
    },
    {
      id: "parent-consent",
      title: "Parent & Guardian Consent",
      content: (
        <>
          <LegalUl
            items={[
              "Schools must obtain written or digital parental consent before creating child profiles",
              "Separate consent is required before sharing a child's photo or video on the platform",
              "Parents can withdraw consent for photo sharing without affecting other platform features",
              "Consent records are maintained by the school and accessible to parents through the app",
            ]}
          />
        </>
      ),
    },
    {
      id: "staff-verification",
      title: "Teacher & Staff Verification",
      content: (
        <>
          <LegalP>All staff with access to child information undergo verification:</LegalP>
          <LegalUl
            items={[
              "Identity verification by school administrators before account creation",
              "Role-based access controls limiting data access to assigned classes only",
              "Background check documentation encouraged and can be tracked in the platform",
              "Staff accounts require school admin approval and can be revoked instantly",
              "Audit logs track all staff access to child profiles and media",
              "Regular access reviews recommended for schools every quarter",
            ]}
          />
        </>
      ),
    },
    {
      id: "safe-communication",
      title: "Safe Communication",
      content: (
        <>
          <LegalUl
            items={[
              "All parent-staff messaging occurs within the monitored platform — no external contact sharing",
              "Messages are logged and available for school administrative review",
              "Direct messaging is limited to authorized staff-parent pairs linked to enrolled children",
              "Broadcast announcements are sent only by verified school administrators",
              "Users cannot send unsolicited messages to unrelated accounts",
            ]}
          />
        </>
      ),
    },
    {
      id: "media-guidelines",
      title: "Media Upload Guidelines",
      content: (
        <>
          <LegalCard title="Permitted Content">
            <LegalUl
              items={[
                "Daily activity photos and videos of enrolled children (with parental consent)",
                "Meal, nap, and learning activity documentation",
                "Classroom event and milestone celebrations",
                "Educational activity records",
              ]}
            />
          </LegalCard>
          <LegalCard title="Prohibited Content">
            <LegalUl
              items={[
                "Photos or videos of children not enrolled at the school",
                "Content depicting unsafe conditions or inappropriate situations",
                "Any media shared without documented parental consent",
                "Personal contact information visible in media",
                "Content that violates our Community Guidelines",
              ]}
            />
          </LegalCard>
        </>
      ),
    },
    {
      id: "photo-consent",
      title: "Child Photo Usage Consent",
      content: (
        <LegalP>
          Schools must maintain records of parental consent for photo and video usage. The Babyland platform supports
          consent tracking per child. Media tagged to a child without active consent is flagged for admin review and
          withheld from parent galleries until consent is confirmed.
        </LegalP>
      ),
    },
    {
      id: "restricted-content",
      title: "Restricted Content",
      content: (
        <LegalP>
          Babyland prohibits any content that exploits, endangers, or depicts harm to children. Our automated and
          manual review systems flag inappropriate uploads. Violating content is removed immediately and reported to
          authorities where required by law.
        </LegalP>
      ),
    },
    {
      id: "reporting-abuse",
      title: "Reporting Abuse & Safety Concerns",
      content: (
        <>
          <LegalP>If you encounter content or behavior that threatens child safety:</LegalP>
          <LegalOl
            items={[
              "Use the in-app \"Report\" button on any message, photo, or profile",
              `Email our Safety Team immediately at ${COMPANY.email.safety}`,
              `For abuse reports: ${COMPANY.email.abuse}`,
              "Contact local law enforcement for emergencies",
            ]}
          />
          <LegalP>
            All reports are reviewed within 24 hours. Critical safety reports are escalated immediately. We cooperate
            fully with law enforcement investigations.
          </LegalP>
        </>
      ),
    },
    {
      id: "emergency",
      title: "Emergency Contact Procedure",
      content: (
        <>
          <LegalUl
            items={[
              "Schools maintain emergency contact information for each child in the platform",
              "Emergency alerts can be broadcast to all parents instantly via push notification",
              "Emergency contact details are accessible to authorized staff during incidents",
              `${COMPANY.emergencySupport}`,
            ]}
          />
        </>
      ),
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      content: (
        <LegalP>
          Our child safety standards comply with Google Play Developer Program Policies (Child Safety section), COPPA
          (USA), GDPR provisions for children's data (EU), the Digital Personal Data Protection Act 2023 (India), and
          applicable local childcare regulations.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Safety Contact",
      content: (
        <LegalUl
          items={[
            <>Safety Team: {COMPANY.email.safety}</>,
            <>Abuse Reports: {COMPANY.email.abuse}</>,
            <>Privacy: {COMPANY.email.privacy}</>,
          ]}
        />
      ),
    },
  ],
};

import { Trash2 } from "lucide-react";
import { LegalP, LegalUl, LegalOl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const dataDeletionConfig: LegalPageConfig = {
  title: "Data Deletion Policy",
  description:
    "Learn how to request deletion of your personal data from Babyland, what data is removed, retention exceptions, and processing timelines.",
  keywords: "Babyland data deletion, delete personal data, GDPR erasure, DPDP data deletion, right to be forgotten",
  path: "/data-deletion",
  icon: Trash2,
  subtitle: "Your right to have personal data deleted from our systems.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: (
        <LegalP>
          You have the right to request deletion of your personal data held by Babyland. This policy explains what data
          can be deleted, how to submit a request, and what to expect during the process.
        </LegalP>
      ),
    },
    {
      id: "what-gets-deleted",
      title: "What Data Gets Deleted",
      content: (
        <>
          <LegalP>Upon a verified deletion request, we will remove:</LegalP>
          <LegalUl
            items={[
              "Your account profile (name, email, phone, profile photo)",
              "Authentication credentials and session data",
              "Personal messages and communication history",
              "Uploaded media where you are the sole subject (subject to school retention policies for child records)",
              "Device tokens and analytics identifiers linked to your account",
              "Payment metadata (transaction records may be retained for legal compliance)",
            ]}
          />
        </>
      ),
    },
    {
      id: "what-may-be-retained",
      title: "Data That May Be Retained",
      content: (
        <>
          <LegalP>Certain data may be retained despite a deletion request:</LegalP>
          <LegalUl
            items={[
              "Child records managed by the school (parents should contact the school or use Account Deletion for child-linked data)",
              "Anonymized, aggregated analytics data that cannot identify you",
              "Records required for legal compliance, tax, or audit purposes (retained for legally mandated periods)",
              "Data necessary to resolve ongoing disputes or enforce our Terms",
              "Backup copies deleted within 90 days of the primary deletion",
            ]}
          />
        </>
      ),
    },
    {
      id: "how-to-request",
      title: "How to Request Data Deletion",
      content: (
        <>
          <LegalOl
            items={[
              <>
                <LegalStrong>In-App:</LegalStrong> Go to Settings → Privacy → Delete My Data
              </>,
              <>
                <LegalStrong>Account Deletion Page:</LegalStrong> Visit{" "}
                <a href="/account-deletion" className="text-primary hover:underline">
                  /account-deletion
                </a>
              </>,
              <>
                <LegalStrong>Email:</LegalStrong> Send a request to {COMPANY.email.privacy} with subject "Data Deletion
                Request"
              </>,
            ]}
          />
          <LegalP>Include your full name, registered email, and school name (if applicable) for verification.</LegalP>
        </>
      ),
    },
    {
      id: "verification",
      title: "Identity Verification",
      content: (
        <LegalP>
          To protect against unauthorized deletion, we verify your identity before processing requests. We may ask you
          to confirm via your registered email or phone number. Requests from third parties require documented
          authorization.
        </LegalP>
      ),
    },
    {
      id: "timeline",
      title: "Processing Timeline",
      content: (
        <>
          <LegalUl
            items={[
              "Acknowledgment of request: Within 3 business days",
              "Completion of deletion: Within 30 days (may extend to 45 days for complex requests)",
              "Confirmation email sent upon completion",
              "Backup purge: Within 90 days of primary deletion",
            ]}
          />
        </>
      ),
    },
    {
      id: "google-play",
      title: "Google Play Store Compliance",
      content: (
        <LegalP>
          This policy satisfies Google Play's User Data policy requirements for data deletion. The privacy policy URL
          ({COMPANY.website}/privacy-policy) and this data deletion policy are provided in the Play Console data safety
          section.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <LegalUl
          items={[
            <>Data Protection Officer: {COMPANY.email.dpo}</>,
            <>Privacy Team: {COMPANY.email.privacy}</>,
          ]}
        />
      ),
    },
  ],
};

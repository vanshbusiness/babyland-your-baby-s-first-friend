import { RefreshCw } from "lucide-react";
import { LegalP, LegalUl, LegalOl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const refundPolicyConfig: LegalPageConfig = {
  title: "Refund & Cancellation Policy",
  description:
    "Understand Babyland's refund eligibility, cancellation procedures, and billing terms for school subscriptions and parent fee payments.",
  keywords: "Babyland refund policy, cancellation policy, subscription refund, SaaS billing, childcare app refund",
  path: "/refund-policy",
  icon: RefreshCw,
  subtitle: "This policy outlines how refunds and cancellations are handled for Babyland subscriptions and services.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: (
        <LegalP>
          Babyland offers subscription-based access to its childcare management platform. This Refund & Cancellation
          Policy applies to school/daycare subscriptions and clarifies how parent fee payments are handled.
        </LegalP>
      ),
    },
    {
      id: "school-subscriptions",
      title: "School Subscription Cancellations",
      content: (
        <>
          <LegalUl
            items={[
              "Schools may cancel their subscription at any time through the admin dashboard or by contacting support",
              "Cancellation takes effect at the end of the current billing period unless otherwise agreed",
              "No partial refunds are provided for unused days within a billing cycle after cancellation",
              "Annual subscriptions cancelled within 14 days of initial purchase may be eligible for a full refund",
              "Annual subscriptions cancelled after 14 days receive a prorated refund for remaining full months, minus a 10% administrative fee",
              "Monthly subscriptions are non-refundable once the billing period has commenced",
            ]}
          />
        </>
      ),
    },
    {
      id: "free-trial",
      title: "Free Trial Period",
      content: (
        <>
          <LegalP>
            If a free trial is offered, you may cancel before the trial ends without charge. If you do not cancel before
            the trial expires, your subscription will automatically convert to a paid plan and you will be charged
            accordingly.
          </LegalP>
        </>
      ),
    },
    {
      id: "parent-payments",
      title: "Parent Fee Payments",
      content: (
        <>
          <LegalP>
            Fee payments made by parents through the Babyland platform are processed on behalf of the school. Refund
            requests for parent payments must be directed to the respective school, as Babyland acts as a payment
            facilitator.
          </LegalP>
          <LegalUl
            items={[
              "Schools set their own refund policies for tuition and activity fees",
              "Payment processor fees on refunded transactions may be non-refundable",
              "Disputed transactions should be reported to support@babyland.app within 30 days",
            ]}
          />
        </>
      ),
    },
    {
      id: "how-to-cancel",
      title: "How to Cancel",
      content: (
        <>
          <LegalOl
            items={[
              "Log in to your Babyland admin dashboard",
              "Navigate to Settings → Subscription → Cancel Subscription",
              "Alternatively, email support@babyland.app with your school name and account email",
              "You will receive a confirmation email within 2 business days",
            ]}
          />
        </>
      ),
    },
    {
      id: "data-after-cancellation",
      title: "Data After Cancellation",
      content: (
        <LegalP>
          Upon cancellation, you may export your data for 30 days. After this period, data may be permanently deleted
          in accordance with our{" "}
          <a href="/data-deletion" className="text-primary hover:underline">
            Data Deletion Policy
          </a>
          . We recommend exporting all records before cancelling.
        </LegalP>
      ),
    },
    {
      id: "exceptions",
      title: "Refund Exceptions",
      content: (
        <>
          <LegalP>Refunds may be granted outside standard policy in the following cases:</LegalP>
          <LegalUl
            items={[
              "Extended service outage caused by Babyland (more than 72 consecutive hours)",
              "Duplicate or erroneous charges verified by our billing team",
              "Material misrepresentation of service features not remedied within 30 days of report",
            ]}
          />
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact for Billing Issues",
      content: (
        <LegalUl
          items={[
            <>Email: {COMPANY.email.support}</>,
            <>Support Hours: {COMPANY.supportHours}</>,
          ]}
        />
      ),
    },
  ],
};

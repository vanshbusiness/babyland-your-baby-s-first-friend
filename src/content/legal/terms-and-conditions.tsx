import { Scale } from "lucide-react";
import { LegalP, LegalUl, LegalOl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const termsConfig: LegalPageConfig = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing your use of the Babyland childcare management platform, mobile apps, and related services.",
  keywords: "Babyland terms, terms of service, user agreement, childcare SaaS terms, subscription terms",
  path: "/terms-and-conditions",
  icon: Scale,
  subtitle: "Please read these Terms carefully before using Babyland's Services.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: (
        <>
          <LegalP>
            By accessing or using Babyland's website, mobile applications, or any related services (the "
            <LegalStrong>Services</LegalStrong>"), you agree to be bound by these Terms & Conditions ("
            <LegalStrong>Terms</LegalStrong>"). If you do not agree, you may not use the Services.
          </LegalP>
          <LegalP>
            If you are using the Services on behalf of a school, daycare, or organization, you represent that you have
            authority to bind that entity to these Terms.
          </LegalP>
        </>
      ),
    },
    {
      id: "services",
      title: "Description of Services",
      content: (
        <>
          <LegalP>
            Babyland provides a cloud-based platform for childcare, daycare, and preschool management, including but not
            limited to:
          </LegalP>
          <LegalUl
            items={[
              "Attendance tracking and check-in/check-out management",
              "Daily activity reports and health logs",
              "Photo and video gallery sharing with parental consent",
              "Parent-school messaging and announcements",
              "Fee management and digital payment processing",
              "Staff and teacher management tools",
              "Administrative dashboards and reporting",
            ]}
          />
        </>
      ),
    },
    {
      id: "accounts",
      title: "User Accounts",
      content: (
        <>
          <LegalUl
            items={[
              "You must provide accurate and complete registration information",
              "You are responsible for maintaining the confidentiality of your account credentials",
              "You must notify us immediately of any unauthorized access to your account",
              "School administrators are responsible for verifying staff identities before granting platform access",
              "Parents must be verified by the school before accessing child-related information",
              "We reserve the right to suspend or terminate accounts that violate these Terms",
            ]}
          />
        </>
      ),
    },
    {
      id: "subscriptions",
      title: "Subscriptions & Payments",
      content: (
        <>
          <LegalP>
            Schools subscribe to Babyland on a monthly or annual basis. Subscription fees are billed in advance and are
            non-refundable except as stated in our{" "}
            <a href="/refund-policy" className="text-primary hover:underline">
              Refund & Cancellation Policy
            </a>
            .
          </LegalP>
          <LegalUl
            items={[
              "Pricing is displayed on our website or provided in your service agreement",
              "We may change pricing with 30 days' notice to existing subscribers",
              "Failure to pay may result in suspension of Services",
              "Parent fee payments processed through the platform are subject to third-party payment processor terms",
            ]}
          />
        </>
      ),
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use",
      content: (
        <LegalP>
          Your use of the Services must comply with our{" "}
          <a href="/acceptable-use" className="text-primary hover:underline">
            Acceptable Use Policy
          </a>{" "}
          and{" "}
          <a href="/community-guidelines" className="text-primary hover:underline">
            Community Guidelines
          </a>
          . Prohibited activities include harassment, unauthorized data access, uploading inappropriate content, and
          any activity that compromises child safety.
        </LegalP>
      ),
    },
    {
      id: "content",
      title: "User Content",
      content: (
        <>
          <LegalP>
            You retain ownership of content you upload (photos, messages, reports). By uploading content, you grant
            Babyland a limited license to store, display, and transmit that content solely to provide the Services to
            authorized users.
          </LegalP>
          <LegalUl
            items={[
              "You represent that you have the right and consent to upload all content, especially photos of children",
              "Schools are responsible for obtaining parental consent for child photo usage",
              "We may remove content that violates our policies or applicable law",
            ]}
          />
        </>
      ),
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content: (
        <LegalP>
          Babyland and its licensors own all rights to the platform, software, branding, and documentation. See our{" "}
          <a href="/copyright" className="text-primary hover:underline">
            Copyright Policy
          </a>{" "}
          and{" "}
          <a href="/eula" className="text-primary hover:underline">
            End User License Agreement
          </a>{" "}
          for details.
        </LegalP>
      ),
    },
    {
      id: "privacy",
      title: "Privacy",
      content: (
        <LegalP>
          Your use of the Services is also governed by our{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          , which describes how we collect, use, and protect your information.
        </LegalP>
      ),
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      content: (
        <LegalP>
          THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. See our full{" "}
          <a href="/disclaimer" className="text-primary hover:underline">
            Disclaimer
          </a>{" "}
          for complete details.
        </LegalP>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <>
          <LegalP>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, BABYLAND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
          </LegalP>
          <LegalP>
            Our total liability for any claim shall not exceed the amount paid by you to Babyland in the twelve (12)
            months preceding the claim.
          </LegalP>
        </>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <>
          <LegalUl
            items={[
              "You may terminate your account at any time via app settings or our Account Deletion page",
              "We may suspend or terminate access for violations of these Terms",
              "Upon termination, your right to use the Services ceases immediately",
              "Provisions that by nature should survive termination will remain in effect",
            ]}
          />
        </>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law & Disputes",
      content: (
        <LegalP>
          These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of
          courts in India, unless otherwise required by applicable consumer protection laws in your jurisdiction.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <LegalUl
          items={[
            <>Email: {COMPANY.email.legal}</>,
            <>Address: {COMPANY.address}</>,
          ]}
        />
      ),
    },
  ],
};

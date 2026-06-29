import { Shield } from "lucide-react";
import { LegalP, LegalUl, LegalStrong, LegalCard } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const privacyPolicyConfig: LegalPageConfig = {
  title: "Privacy Policy",
  description:
    "Learn how Babyland collects, uses, stores, and protects personal data for parents, schools, and childcare staff. COPPA, GDPR, and DPDP compliant.",
  keywords:
    "Babyland privacy policy, childcare app privacy, children data protection, COPPA compliance, GDPR, DPDP Act, Google Play data safety",
  path: "/privacy-policy",
  icon: Shield,
  subtitle:
    "This Privacy Policy explains how Babyland collects, uses, discloses, and safeguards information when you use our childcare management platform and mobile applications.",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <>
          <LegalP>
            {COMPANY.legalName} ("<LegalStrong>Babyland</LegalStrong>," "<LegalStrong>we</LegalStrong>,"
            "<LegalStrong>us</LegalStrong>," or "<LegalStrong>our</LegalStrong>") operates a childcare, daycare, and
            preschool management platform that connects parents, schools, teachers, and administrators. We are committed
            to protecting the privacy of all users, with particular emphasis on safeguarding children's information.
          </LegalP>
          <LegalP>
            This Privacy Policy applies to our website at {COMPANY.website}, our mobile applications available on Google
            Play and other app stores, and all related services (collectively, the "<LegalStrong>Services</LegalStrong>").
            By using our Services, you agree to the collection and use of information in accordance with this policy.
          </LegalP>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: (
        <>
          <LegalP>We collect information in the following categories:</LegalP>
          <LegalCard title="Account & Profile Information">
            <LegalUl
              items={[
                "Parent/guardian name, email address, phone number, and profile photo",
                "School administrator and staff names, roles, credentials, and contact details",
                "Child's first name, date of birth, class assignment, allergies, and emergency contacts (provided by parents or schools)",
                "Authentication credentials and account preferences",
              ]}
            />
          </LegalCard>
          <LegalCard title="Usage & Device Information">
            <LegalUl
              items={[
                "Device type, operating system, unique device identifiers, and app version",
                "IP address, browser type, and general location (country/region level)",
                "App interaction data, feature usage, session duration, and crash logs",
                "Push notification tokens for delivering alerts and updates",
              ]}
            />
          </LegalCard>
          <LegalCard title="Media & Communication Data">
            <LegalUl
              items={[
                "Photos and videos uploaded to daily reports, galleries, and activity logs (with explicit consent)",
                "Messages exchanged between parents and authorized school staff within the platform",
                "Attendance records, daily activity reports, meal logs, and health notes",
              ]}
            />
          </LegalCard>
          <LegalCard title="Payment Information">
            <LegalUl
              items={[
                "Billing details for school subscriptions and parent fee payments are processed by third-party payment processors",
                "We do not store full credit card numbers on our servers",
              ]}
            />
          </LegalCard>
        </>
      ),
    },
    {
      id: "permissions",
      title: "App Permissions & Usage",
      content: (
        <>
          <LegalP>
            Our mobile application may request the following permissions. Each permission is used only for its stated
            purpose and can be managed through your device settings:
          </LegalP>
          <LegalUl
            items={[
              <>
                <LegalStrong>Camera:</LegalStrong> To capture photos and videos for daily reports, activity logs, and
                gallery uploads. Camera access is never used in the background.
              </>,
              <>
                <LegalStrong>Storage / Photos:</LegalStrong> To save and upload media files selected from your device
                gallery for school reports and documentation.
              </>,
              <>
                <LegalStrong>Notifications:</LegalStrong> To send attendance alerts, daily report notifications, fee
                reminders, emergency announcements, and message updates.
              </>,
              <>
                <LegalStrong>Location (Optional):</LegalStrong> When enabled by schools for geofenced check-in/check-out
                features, we collect approximate location only during active attendance actions. Location is not tracked
                continuously or in the background.
              </>,
              <>
                <LegalStrong>Microphone (Optional):</LegalStrong> Used only when recording video with audio for activity
                documentation. Audio is never recorded without user initiation.
              </>,
              <>
                <LegalStrong>Internet / Network:</LegalStrong> Required for syncing data, delivering notifications, and
                enabling real-time communication between parents and schools.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      content: (
        <>
          <LegalUl
            items={[
              "Provide, operate, and maintain the Babyland platform and its features",
              "Enable attendance tracking, daily reports, gallery sharing, and parent-school communication",
              "Process subscription payments and school fee transactions through secure payment partners",
              "Send transactional notifications, service updates, and security alerts",
              "Verify the identity of teachers, staff, and school administrators",
              "Monitor platform performance, diagnose technical issues, and improve user experience",
              "Detect, prevent, and address fraud, abuse, and security incidents",
              "Comply with legal obligations and respond to lawful requests",
            ]}
          />
        </>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: (
        <>
          <LegalP>We integrate with trusted third-party services to operate our platform:</LegalP>
          <LegalUl
            items={[
              <>
                <LegalStrong>Firebase (Google):</LegalStrong> Authentication, cloud messaging (push notifications),
                cloud storage for media files, and remote configuration. Data is processed according to Google's data
                processing terms.
              </>,
              <>
                <LegalStrong>Google Analytics / Firebase Analytics:</LegalStrong> Aggregated usage analytics to
                understand feature adoption and improve the app. Analytics data is anonymized where possible.
              </>,
              <>
                <LegalStrong>Firebase Crashlytics:</LegalStrong> Crash reporting and stability monitoring. Crash logs
                may include device information but do not include children's personal content.
              </>,
              <>
                <LegalStrong>Payment Processors:</LegalStrong> Secure processing of subscription and fee payments (e.g.,
                Razorpay, Stripe, or equivalent providers as configured by your school).
              </>,
            ]}
          />
          <LegalP>
            These third parties are contractually obligated to protect your data and may only use it to provide services
            on our behalf. We do not sell personal information to third parties.
          </LegalP>
        </>
      ),
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy & COPPA Compliance",
      content: (
        <>
          <LegalP>
            Babyland is designed for use by parents, guardians, schools, and authorized childcare staff—not directly by
            children under 13. We do not knowingly collect personal information directly from children.
          </LegalP>
          <LegalUl
            items={[
              "Child profiles are created and managed exclusively by verified parents/guardians or authorized school administrators",
              "Parental consent is obtained before any child's photo, video, or personal information is shared on the platform",
              "Children's data is used solely for legitimate childcare management purposes (attendance, reports, communication)",
              "We limit collection of children's data to what is reasonably necessary for school operations",
              "Parents may review, modify, or request deletion of their child's information at any time",
            ]}
          />
          <LegalP>
            If you believe we have inadvertently collected information from a child without proper consent, please
            contact us immediately at {COMPANY.email.privacy}.
          </LegalP>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: (
        <>
          <LegalP>
            We retain personal information only for as long as necessary to fulfill the purposes described in this
            policy, unless a longer retention period is required by law or legitimate business needs:
          </LegalP>
          <LegalUl
            items={[
              "Active account data is retained while your account remains active",
              "Child records are retained for the duration of enrollment plus a reasonable period for school records compliance",
              "Media files (photos/videos) are retained according to school retention settings or until deletion is requested",
              "Analytics and crash data is retained in aggregated form for up to 26 months",
              "Upon account deletion, personal data is removed within 30 days, except where retention is legally required",
            ]}
          />
        </>
      ),
    },
    {
      id: "data-security",
      title: "Data Security",
      content: (
        <>
          <LegalP>
            We implement industry-standard technical and organizational measures to protect your information, including
            encryption in transit (TLS/SSL) and at rest, role-based access controls, staff security training, regular
            security assessments, and secure cloud infrastructure. See our{" "}
            <a href="/security" className="text-primary hover:underline">
              Security Practices
            </a>{" "}
            page for details.
          </LegalP>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights & Choices",
      content: (
        <>
          <LegalP>Depending on your jurisdiction, you may have the following rights:</LegalP>
          <LegalUl
            items={[
              "Access and receive a copy of your personal data",
              "Correct inaccurate or incomplete information",
              "Request deletion of your personal data (see our Data Deletion Policy)",
              "Object to or restrict certain processing activities",
              "Data portability — receive your data in a structured, machine-readable format",
              "Withdraw consent at any time where processing is consent-based",
              "Opt out of non-essential analytics and marketing communications",
            ]}
          />
          <LegalP>
            To exercise these rights, contact {COMPANY.email.privacy}. We will respond within 30 days. For GDPR-specific
            rights, see our{" "}
            <a href="/gdpr" className="text-primary hover:underline">
              GDPR Compliance
            </a>{" "}
            page. For India-specific rights, see our{" "}
            <a href="/dpdp" className="text-primary hover:underline">
              DPDP Act Compliance
            </a>{" "}
            page.
          </LegalP>
        </>
      ),
    },
    {
      id: "account-deletion",
      title: "Account Creation & Deletion",
      content: (
        <>
          <LegalP>
            Accounts are created by parents, guardians, or school administrators during onboarding. You may delete your
            account at any time through the app settings or by visiting our{" "}
            <a href="/account-deletion" className="text-primary hover:underline">
              Account Deletion
            </a>{" "}
            page. Upon deletion, we will remove your personal data in accordance with our{" "}
            <a href="/data-deletion" className="text-primary hover:underline">
              Data Deletion Policy
            </a>
            .
          </LegalP>
        </>
      ),
    },
    {
      id: "international",
      title: "International Data Transfers",
      content: (
        <LegalP>
          Your information may be transferred to and processed in countries other than your country of residence. We
          ensure appropriate safeguards are in place, including standard contractual clauses and compliance with
          applicable data protection laws, when transferring data internationally.
        </LegalP>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      content: (
        <LegalP>
          We may update this Privacy Policy from time to time. We will notify you of material changes via email, in-app
          notification, or a prominent notice on our website. Your continued use of the Services after changes become
          effective constitutes acceptance of the updated policy.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <>
          <LegalP>For privacy-related inquiries, contact our Data Protection Officer:</LegalP>
          <LegalUl
            items={[
              <>Email: {COMPANY.email.dpo}</>,
              <>Privacy: {COMPANY.email.privacy}</>,
              <>Address: {COMPANY.address}</>,
            ]}
          />
        </>
      ),
    },
  ],
};

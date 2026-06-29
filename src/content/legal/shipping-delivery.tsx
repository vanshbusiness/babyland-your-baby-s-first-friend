import { CloudDownload } from "lucide-react";
import { LegalP, LegalUl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const shippingDeliveryConfig: LegalPageConfig = {
  title: "Shipping & Delivery Policy",
  description:
    "Babyland is a digital SaaS platform. Learn about instant digital delivery of our childcare management services, app access, and account provisioning.",
  keywords: "Babyland delivery, digital service delivery, SaaS provisioning, app download, instant access",
  path: "/shipping-delivery",
  icon: CloudDownload,
  subtitle: "Babyland is a fully digital service — no physical products are shipped.",
  sections: [
    {
      id: "digital-service",
      title: "Digital Service Delivery",
      content: (
        <>
          <LegalP>
            Babyland is a Software-as-a-Service (SaaS) platform delivered entirely through digital channels. We do not
            sell, ship, or deliver any physical products. All services are provided electronically via our web platform
            and mobile applications.
          </LegalP>
        </>
      ),
    },
    {
      id: "account-provisioning",
      title: "Account Provisioning & Access",
      content: (
        <>
          <LegalUl
            items={[
              <>
                <LegalStrong>School Onboarding:</LegalStrong> Upon subscription confirmation, school administrator
                accounts are provisioned within 24 hours (typically instantly). Setup instructions are sent via email.
              </>,
              <>
                <LegalStrong>Parent Access:</LegalStrong> Parents receive invitations from their child's school. Account
                activation is immediate upon accepting the invitation and completing registration.
              </>,
              <>
                <LegalStrong>Staff Access:</LegalStrong> Teachers and staff accounts are created by school administrators
                and activated upon first login.
              </>,
              <>
                <LegalStrong>Mobile App:</LegalStrong> Available for download on Google Play Store. App access is tied to
                your Babyland account credentials.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "delivery-timeline",
      title: "Delivery Timeline",
      content: (
        <>
          <LegalUl
            items={[
              "Web platform access: Immediate upon account creation",
              "Mobile app download: Immediate from Google Play Store",
              "Push notifications: Enabled upon app installation and permission grant",
              "Data migration assistance (if applicable): Within 5–10 business days of request",
              "Custom integrations: Timeline communicated separately in service agreement",
            ]}
          />
        </>
      ),
    },
    {
      id: "system-requirements",
      title: "System Requirements",
      content: (
        <>
          <LegalP>To access Babyland Services, you need:</LegalP>
          <LegalUl
            items={[
              "A compatible smartphone or tablet (Android 8.0+ for mobile app)",
              "A modern web browser (Chrome, Firefox, Safari, Edge — latest two versions)",
              "Stable internet connection (minimum 1 Mbps recommended)",
              "Valid email address for account registration and notifications",
            ]}
          />
        </>
      ),
    },
    {
      id: "service-availability",
      title: "Service Availability",
      content: (
        <LegalP>
          We target 99.9% uptime for our platform. Scheduled maintenance is communicated in advance. In the event of
          service disruptions, updates are posted on our status page and communicated via email to affected subscribers.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Delivery Support",
      content: (
        <LegalUl
          items={[
            <>If you experience delays in account activation, contact {COMPANY.email.support}</>,
            <>Support Hours: {COMPANY.supportHours}</>,
          ]}
        />
      ),
    },
  ],
};

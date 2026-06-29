import { Lock } from "lucide-react";
import { LegalP, LegalUl, LegalStrong, LegalCard } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const securityConfig: LegalPageConfig = {
  title: "Security Practices",
  description:
    "Learn about Babyland's security infrastructure including encryption, access controls, infrastructure security, and incident response procedures.",
  keywords: "Babyland security, data encryption, cloud security, childcare app security, SOC compliance",
  path: "/security",
  icon: Lock,
  subtitle: "How we protect your data and maintain platform security.",
  sections: [
    {
      id: "commitment",
      title: "Our Security Commitment",
      content: (
        <LegalP>
          Security is foundational to Babyland. We protect sensitive information about children, families, and schools
          using industry-leading practices across infrastructure, application, and organizational layers.
        </LegalP>
      ),
    },
    {
      id: "encryption",
      title: "Encryption",
      content: (
        <LegalUl
          items={[
            "All data in transit is encrypted using TLS 1.2+ (HTTPS)",
            "Data at rest is encrypted using AES-256 encryption on cloud storage",
            "Database encryption for all stored personal and child-related data",
            "Encrypted backups with separate key management",
            "Secure credential storage using industry-standard hashing (bcrypt/Argon2)",
          ]}
        />
      ),
    },
    {
      id: "access-controls",
      title: "Access Controls",
      content: (
        <>
          <LegalCard title="Platform Access">
            <LegalUl
              items={[
                "Role-based access control (RBAC) for all user types",
                "Multi-factor authentication support for administrators",
                "Session management with automatic timeout",
                "IP-based access restrictions available for schools",
              ]}
            />
          </LegalCard>
          <LegalCard title="Internal Access">
            <LegalUl
              items={[
                "Principle of least privilege for all Babyland employees",
                "Production access requires multi-factor authentication",
                "All internal access is logged and audited",
                "Regular access reviews and immediate revocation upon role change",
              ]}
            />
          </LegalCard>
        </>
      ),
    },
    {
      id: "infrastructure",
      title: "Infrastructure Security",
      content: (
        <LegalUl
          items={[
            "Hosted on enterprise-grade cloud infrastructure (Google Cloud Platform / Firebase)",
            "Network segmentation and firewall protection",
            "DDoS protection and Web Application Firewall (WAF)",
            "Regular automated vulnerability scanning",
            "Penetration testing conducted annually by third-party security firms",
            "Automated security patching and dependency updates",
          ]}
        />
      ),
    },
    {
      id: "application",
      title: "Application Security",
      content: (
        <LegalUl
          items={[
            "Secure software development lifecycle (SDLC) with code review",
            "Input validation and output encoding to prevent injection attacks",
            "CSRF and XSS protection mechanisms",
            "API rate limiting and authentication on all endpoints",
            "Dependency scanning for known vulnerabilities (CVE monitoring)",
            "Firebase Security Rules for database and storage access control",
          ]}
        />
      ),
    },
    {
      id: "monitoring",
      title: "Monitoring & Incident Response",
      content: (
        <>
          <LegalUl
            items={[
              "24/7 automated monitoring for anomalous activity",
              "Real-time alerting for security events",
              "Documented incident response plan with defined escalation procedures",
              "Security incidents affecting user data are reported within 72 hours as required by law",
              "Post-incident reviews and remediation tracking",
            ]}
          />
        </>
      ),
    },
    {
      id: "compliance",
      title: "Compliance & Certifications",
      content: (
        <LegalUl
          items={[
            "GDPR-compliant data processing practices",
            "India DPDP Act 2023 compliance framework",
            "COPPA-compliant children's data handling",
            "Google Play data safety requirements",
            "Working toward SOC 2 Type II certification",
          ]}
        />
      ),
    },
    {
      id: "your-role",
      title: "Your Role in Security",
      content: (
        <LegalUl
          items={[
            "Use strong, unique passwords for your Babyland account",
            "Enable two-factor authentication when available",
            "Do not share login credentials",
            "Report suspicious activity to support@babyland.app immediately",
            "Keep your mobile device and app updated to the latest version",
          ]}
        />
      ),
    },
    {
      id: "contact",
      title: "Security Contact",
      content: (
        <LegalP>
          Report security vulnerabilities responsibly to {COMPANY.email.support} with subject "Security
          Vulnerability Report." We appreciate responsible disclosure and will acknowledge reports within 48 hours.
        </LegalP>
      ),
    },
  ],
};

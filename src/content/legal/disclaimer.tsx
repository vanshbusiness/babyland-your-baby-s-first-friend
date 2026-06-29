import { AlertTriangle } from "lucide-react";
import { LegalP, LegalUl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const disclaimerConfig: LegalPageConfig = {
  title: "Disclaimer",
  description:
    "Important disclaimers regarding Babyland's childcare management platform, including limitations of liability, medical advice, and service availability.",
  keywords: "Babyland disclaimer, liability disclaimer, medical disclaimer, service disclaimer",
  path: "/disclaimer",
  icon: AlertTriangle,
  subtitle: "Important legal disclaimers regarding the use of Babyland services.",
  sections: [
    {
      id: "general",
      title: "General Disclaimer",
      content: (
        <LegalP>
          The information and services provided through Babyland are offered on an "as is" and "as available" basis.
          {COMPANY.legalName} makes no representations or warranties of any kind, express or implied, regarding the
          operation of the Services or the information, content, or materials included therein.
        </LegalP>
      ),
    },
    {
      id: "not-medical",
      title: "Not Medical or Professional Advice",
      content: (
        <>
          <LegalP>
            Babyland is a childcare management and communication platform. It is <LegalStrong>not</LegalStrong> a
            medical device, healthcare provider, or substitute for professional medical, nutritional, or developmental
            advice.
          </LegalP>
          <LegalUl
            items={[
              "Health logs and activity reports are for informational and record-keeping purposes only",
              "Always consult qualified healthcare professionals for medical decisions regarding your child",
              "Babyland does not diagnose, treat, or prevent any medical condition",
              "Emergency situations require immediate contact with emergency services — not the app",
            ]}
          />
        </>
      ),
    },
    {
      id: "accuracy",
      title: "Information Accuracy",
      content: (
        <LegalP>
          While we strive for accuracy, Babyland does not warrant that information entered by schools, teachers, or
          third parties is complete, accurate, or current. Schools are responsible for the accuracy of data they input.
          Parents should verify critical information directly with their child's school.
        </LegalP>
      ),
    },
    {
      id: "availability",
      title: "Service Availability",
      content: (
        <LegalP>
          We do not guarantee uninterrupted or error-free access to the Services. Scheduled maintenance, technical
          issues, or circumstances beyond our control may cause temporary unavailability. We are not liable for damages
          resulting from service interruptions.
        </LegalP>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Content & Links",
      content: (
        <LegalP>
          The Services may contain links to third-party websites or integrate third-party services. Babyland does not
          endorse and is not responsible for the content, privacy practices, or availability of third-party resources.
        </LegalP>
      ),
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      content: (
        <>
          <LegalP>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BABYLAND DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </LegalP>
          <LegalP>
            IN NO EVENT SHALL BABYLAND BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICES.
          </LegalP>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <LegalP>Questions: {COMPANY.email.legal}</LegalP>
      ),
    },
  ],
};

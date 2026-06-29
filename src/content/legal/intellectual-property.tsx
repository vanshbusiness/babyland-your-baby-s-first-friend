import { Copyright } from "lucide-react";
import { LegalP, LegalUl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const intellectualPropertyConfig: LegalPageConfig = {
  title: "Intellectual Property Policy",
  description:
    "Babyland's intellectual property rights, trademark usage guidelines, and policies regarding user-generated content ownership.",
  keywords: "Babyland intellectual property, trademarks, patents, user content ownership, IP policy",
  path: "/intellectual-property",
  icon: Copyright,
  subtitle: "Protecting innovation and respecting intellectual property rights.",
  sections: [
    {
      id: "our-ip",
      title: "Babyland's Intellectual Property",
      content: (
        <>
          <LegalP>
            All content, features, and functionality of the Babyland platform — including but not limited to software
            code, user interface design, logos, trademarks, graphics, documentation, and marketing materials — are
            owned by {COMPANY.legalName} and protected by copyright, trademark, and other intellectual property laws.
          </LegalP>
          <LegalUl
            items={[
              "The Babyland name, logo, and brand assets are registered or pending trademarks",
              "Platform software is protected by copyright and trade secret laws",
              "UI/UX designs and visual elements are proprietary to Babyland",
              "Documentation, help content, and training materials are copyrighted",
            ]}
          />
        </>
      ),
    },
    {
      id: "license",
      title: "License to Use",
      content: (
        <LegalP>
          Subject to our Terms & Conditions and EULA, we grant you a limited, non-exclusive, non-transferable, revocable
          license to access and use the Services for their intended purpose. This license does not permit copying,
          modifying, distributing, or creating derivative works of our platform.
        </LegalP>
      ),
    },
    {
      id: "user-content",
      title: "User-Generated Content",
      content: (
        <>
          <LegalP>You retain ownership of content you upload to Babyland. By uploading content, you:</LegalP>
          <LegalUl
            items={[
              "Grant Babyland a worldwide, non-exclusive license to use, store, and display content solely to provide the Services",
              "Represent that you own or have rights to all uploaded content",
              "Confirm that content does not infringe any third party's intellectual property rights",
              "Acknowledge that this license terminates when content is deleted, subject to backup retention periods",
            ]}
          />
        </>
      ),
    },
    {
      id: "restrictions",
      title: "Restrictions",
      content: (
        <LegalUl
          items={[
            "Do not copy, reproduce, or redistribute Babyland software or content",
            "Do not use Babyland trademarks without written permission",
            "Do not remove copyright, trademark, or proprietary notices",
            "Do not create competing products based on our platform or designs",
            "Do not reverse engineer or attempt to extract source code",
          ]}
        />
      ),
    },
    {
      id: "infringement",
      title: "Reporting IP Infringement",
      content: (
        <>
          <LegalP>
            If you believe your intellectual property has been infringed on our platform, send a notice to{" "}
            {COMPANY.email.legal} including:
          </LegalP>
          <LegalUl
            items={[
              "Identification of the copyrighted work or trademark claimed to be infringed",
              "Identification of the infringing material and its location on our platform",
              "Your contact information",
              "A statement of good faith belief that use is not authorized",
              "A statement under penalty of perjury that the information is accurate",
              "Your physical or electronic signature",
            ]}
          />
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <LegalP>IP inquiries: {COMPANY.email.legal}</LegalP>
      ),
    },
  ],
};

export const copyrightConfig: LegalPageConfig = {
  title: "Copyright Policy",
  description:
    "Babyland copyright policy including DMCA takedown procedures, copyright ownership, and infringement reporting.",
  keywords: "Babyland copyright policy, DMCA, copyright infringement, takedown notice",
  path: "/copyright",
  icon: Copyright,
  subtitle: "Our commitment to respecting copyright and responding to infringement claims.",
  sections: [
    {
      id: "ownership",
      title: "Copyright Ownership",
      content: (
        <LegalP>
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved. The Babyland platform, including its
          original content, features, and functionality, is the exclusive property of {COMPANY.legalName} and is
          protected by international copyright laws.
        </LegalP>
      ),
    },
    {
      id: "user-content",
      title: "User Content Copyright",
      content: (
        <LegalP>
          Users retain copyright to content they create and upload. By uploading, users grant Babyland a limited
          license to display and distribute content within the platform to authorized users. See our{" "}
          <a href="/intellectual-property" className="text-primary hover:underline">
            Intellectual Property Policy
          </a>{" "}
          for details.
        </LegalP>
      ),
    },
    {
      id: "dmca",
      title: "DMCA Takedown Procedure",
      content: (
        <>
          <LegalP>
            We respond to notices of alleged copyright infringement in accordance with applicable law. To submit a
            takedown notice:
          </LegalP>
          <LegalUl
            items={[
              `Send email to ${COMPANY.email.legal} with subject "DMCA Takedown Notice"`,
              "Identify the copyrighted work claimed to have been infringed",
              "Identify the material on our platform and provide sufficient information to locate it",
              "Provide your contact information (address, phone, email)",
              "Include a statement of good faith belief that use is not authorized by the copyright owner",
              "Include a statement that the information is accurate and you are authorized to act on behalf of the owner",
              "Include your physical or electronic signature",
            ]}
          />
        </>
      ),
    },
    {
      id: "counter-notice",
      title: "Counter-Notification",
      content: (
        <LegalP>
          If you believe content was removed in error, you may submit a counter-notification to {COMPANY.email.legal}
          with the information required by applicable law. We will forward counter-notifications to the original
          complainant and may restore content if no court action is filed within the statutory period.
        </LegalP>
      ),
    },
    {
      id: "repeat-infringers",
      title: "Repeat Infringers",
      content: (
        <LegalP>
          We maintain a policy of terminating accounts of users who are repeat copyright infringers in appropriate
          circumstances.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Copyright Agent",
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

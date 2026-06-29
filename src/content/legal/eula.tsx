import { FileKey } from "lucide-react";
import { LegalP, LegalUl, LegalOl, LegalStrong } from "@/components/legal/LegalContent";
import { COMPANY } from "@/lib/company";
import type { LegalPageConfig } from "@/types/legal";

export const eulaConfig: LegalPageConfig = {
  title: "End User License Agreement",
  description:
    "Babyland End User License Agreement (EULA) governing the use of our mobile applications and software on Google Play and other platforms.",
  keywords: "Babyland EULA, end user license agreement, mobile app license, software license terms",
  path: "/eula",
  icon: FileKey,
  subtitle: "License terms for Babyland mobile applications and software.",
  sections: [
    {
      id: "agreement",
      title: "Agreement",
      content: (
        <LegalP>
          This End User License Agreement ("EULA") is a legal agreement between you and {COMPANY.legalName} for the
          Babyland mobile application and related software ("Software"). By installing or using the Software, you agree
          to be bound by this EULA.
        </LegalP>
      ),
    },
    {
      id: "license-grant",
      title: "License Grant",
      content: (
        <LegalP>
          Subject to your compliance with this EULA and our Terms & Conditions, we grant you a limited, non-exclusive,
          non-transferable, revocable license to install and use the Software on devices you own or control, solely for
          personal or authorized institutional childcare management purposes.
        </LegalP>
      ),
    },
    {
      id: "restrictions",
      title: "License Restrictions",
      content: (
        <LegalUl
          items={[
            "You may not copy, modify, or create derivative works of the Software",
            "You may not reverse engineer, decompile, or disassemble the Software",
            "You may not rent, lease, lend, sell, or sublicense the Software",
            "You may not remove or alter any proprietary notices or labels",
            "You may not use the Software for any unlawful purpose",
            "You may not use the Software to develop a competing product",
          ]}
        />
      ),
    },
    {
      id: "ownership",
      title: "Ownership",
      content: (
        <LegalP>
          The Software is licensed, not sold. {COMPANY.legalName} retains all right, title, and interest in the Software,
          including all copyrights, patents, trademarks, and other intellectual property rights.
        </LegalP>
      ),
    },
    {
      id: "updates",
      title: "Updates & Maintenance",
      content: (
        <LegalP>
          We may provide updates, patches, and new versions of the Software. Updates may be automatically installed.
          This EULA applies to all updates unless accompanied by a separate license. We are not obligated to provide
          maintenance or support unless required by applicable law.
        </LegalP>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <LegalP>
          This license is effective until terminated. It terminates automatically if you fail to comply with any term.
          Upon termination, you must cease all use and uninstall the Software. Sections regarding ownership,
          disclaimers, and limitation of liability survive termination.
        </LegalP>
      ),
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      content: (
        <LegalP>
          THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </LegalP>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <LegalP>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, BABYLAND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE TWELVE MONTHS
          PRECEDING THE CLAIM.
        </LegalP>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <LegalP>
          This EULA is governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts
          in India.
        </LegalP>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <LegalP>EULA inquiries: {COMPANY.email.legal}</LegalP>
      ),
    },
  ],
};

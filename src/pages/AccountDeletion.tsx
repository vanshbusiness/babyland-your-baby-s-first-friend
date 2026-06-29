import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserX, Smartphone, Mail, AlertTriangle, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/legal/PageLayout";
import SEO from "@/components/legal/SEO";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";
import { LegalP, LegalUl, LegalCard } from "@/components/legal/LegalContent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const steps = [
  {
    icon: Smartphone,
    title: "Delete via Mobile App",
    description: "Open Babyland → Settings → Account → Delete Account. Confirm your decision when prompted.",
  },
  {
    icon: Mail,
    title: "Delete via Email Request",
    description: `Send an email to ${COMPANY.email.privacy} with subject "Account Deletion Request" including your registered email and school name.`,
  },
  {
    icon: AlertTriangle,
    title: "What Happens Next",
    description:
      "Your account enters a 7-day grace period. You can cancel deletion by logging back in. After 7 days, your account and personal data are permanently deleted.",
  },
];

const AccountDeletion = () => (
  <PageLayout>
    <SEO
      title="Account Deletion – Delete Your Babyland Account"
      description="Learn how to permanently delete your Babyland account and associated personal data. Google Play compliant account deletion process."
      keywords="Babyland account deletion, delete account, remove data, Google Play account deletion"
      path="/account-deletion"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Account Deletion",
        description: "How to delete your Babyland account and personal data.",
        url: `${COMPANY.website}/account-deletion`,
      }}
    />

    <section className="relative py-12 md:py-16 bg-hero-gradient overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blush-light rounded-full blur-3xl opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Account Deletion</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <UserX className="w-6 h-6 text-destructive" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Delete Your Account
          </h1>
          <p className="text-lg text-muted-foreground">
            We're sorry to see you go. This page explains how to permanently delete your Babyland account and
            associated personal data, in compliance with Google Play Store requirements.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-card rounded-2xl p-6 shadow-soft border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Step {i + 1}: {step.title}
                </h2>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <LegalCard title="What Gets Deleted">
          <LegalUl
            items={[
              "Your profile information (name, email, phone, photo)",
              "Authentication credentials and login sessions",
              "Personal messages and notification preferences",
              "Device tokens and app-specific settings",
            ]}
          />
        </LegalCard>

        <LegalCard title="What May Be Retained">
          <LegalUl
            items={[
              "Child records managed by your school (contact the school or our privacy team)",
              "Transaction records required for legal and tax compliance",
              "Anonymized analytics data that cannot identify you",
              "Backup copies purged within 90 days",
            ]}
          />
        </LegalCard>

        <div className="bg-mint-light/30 rounded-2xl p-8 border border-border mt-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-secondary-foreground shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Google Play Compliance</h2>
              <LegalP className="mb-0">
                This account deletion process satisfies Google Play's requirement for users to request account and data
                deletion. Our privacy policy is available at{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  {COMPANY.website}/privacy-policy
                </Link>
                .
              </LegalP>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Button variant="cta" size="lg" asChild>
            <a href={`mailto:${COMPANY.email.privacy}?subject=Account%20Deletion%20Request`}>
              <Mail className="w-5 h-5" />
              Request Account Deletion
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/data-deletion">View Data Deletion Policy</Link>
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Questions? Contact {COMPANY.email.privacy} or visit our{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </div>
    </section>
  </PageLayout>
);

export default AccountDeletion;

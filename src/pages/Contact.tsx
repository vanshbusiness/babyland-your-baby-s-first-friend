import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Clock, MapPin, Phone, AlertCircle, Send } from "lucide-react";
import PageLayout from "@/components/legal/PageLayout";
import SEO from "@/components/legal/SEO";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const faqs = [
  {
    q: "How do I get started with Babyland for my school?",
    a: "Contact our team or join the waitlist on our homepage. We'll schedule an onboarding demo and help set up your school account within 24 hours.",
  },
  {
    q: "How can parents access the app?",
    a: "Parents receive an invitation from their child's school. After registering with the invitation link, they can download the app from Google Play and log in immediately.",
  },
  {
    q: "Is my child's data safe on Babyland?",
    a: "Yes. We use enterprise-grade encryption, role-based access controls, and comply with COPPA, GDPR, and India's DPDP Act. See our Security and Child Safety pages for details.",
  },
  {
    q: "How do I delete my account or request data deletion?",
    a: "Visit our Account Deletion page or email privacy@babyland.app. We process deletion requests within 30 days.",
  },
  {
    q: "What are your support hours?",
    a: "Our support team is available Monday through Friday, 9:00 AM to 6:00 PM IST. For urgent child-safety concerns, email safety@babyland.app (monitored 24/7).",
  },
];

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    const mailtoLink = `mailto:${COMPANY.email.general}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`,
    )}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client...", {
      description: "If it doesn't open, email us directly at contact@babyland.app",
    });
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Babyland – Get in Touch"
        description="Contact the Babyland team for support, sales inquiries, or partnership opportunities. We're here to help parents and schools."
        keywords="contact Babyland, Babyland support, childcare app help, sales inquiry"
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Babyland",
          url: `${COMPANY.website}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: COMPANY.name,
            email: COMPANY.email.general,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: COMPANY.email.support,
              availableLanguage: ["English", "Hindi"],
            },
          },
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
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Contact <span className="text-gradient">Babyland</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, need support, or want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: COMPANY.email.general },
                { icon: Phone, label: "Phone", value: COMPANY.phone },
                { icon: Clock, label: "Support Hours", value: COMPANY.supportHours },
                { icon: MapPin, label: "Business Address", value: COMPANY.address },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 bg-card rounded-2xl p-5 shadow-soft border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 bg-destructive/5 rounded-2xl p-5 border border-destructive/20">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Emergency Support</p>
                  <p className="text-sm text-muted-foreground mt-1">{COMPANY.emergencySupport}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us more about your inquiry..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant="cta" size="lg">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;

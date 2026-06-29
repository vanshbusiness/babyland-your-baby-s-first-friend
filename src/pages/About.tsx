import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Target,
  Eye,
  ShieldCheck,
  Bell,
  Camera,
  CreditCard,
  ClipboardCheck,
  MessageCircle,
  BarChart3,
  Users,
  School,
  Lock,
} from "lucide-react";
import PageLayout from "@/components/legal/PageLayout";
import SEO from "@/components/legal/SEO";
import { COMPANY } from "@/lib/company";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const features = [
  { icon: ClipboardCheck, title: "Attendance", description: "Real-time check-in/check-out with instant parent notifications.", color: "bg-blush-light" },
  { icon: BarChart3, title: "Daily Reports", description: "Meals, naps, activities, and milestones documented and shared daily.", color: "bg-mint-light" },
  { icon: Camera, title: "Gallery", description: "Secure photo and video sharing with parental consent controls.", color: "bg-peach" },
  { icon: MessageCircle, title: "Communication", description: "Direct messaging between parents and verified school staff.", color: "bg-lavender" },
  { icon: Bell, title: "Notifications", description: "Push alerts for attendance, announcements, fees, and emergencies.", color: "bg-cream" },
  { icon: CreditCard, title: "Digital Payments", description: "Streamlined fee collection and payment tracking for schools and parents.", color: "bg-blush-light" },
];

const parentTrust = [
  "Real-time visibility into your child's day",
  "Secure, consent-based photo sharing",
  "Direct communication with verified teachers",
  "Instant attendance and emergency alerts",
  "Transparent fee and payment tracking",
];

const schoolBenefits = [
  "All-in-one admin dashboard for your entire center",
  "Automated attendance and reporting workflows",
  "Staff verification and role-based access",
  "Reduced paperwork and manual processes",
  "Enhanced parent engagement and satisfaction",
  "Compliance-ready data management",
];

const About = () => (
  <PageLayout>
    <SEO
      title="About Babyland – Modern Childcare Management Platform"
      description="Discover Babyland's vision, mission, and features. The trusted platform connecting parents, teachers, and schools for safer, smarter childcare management."
      keywords="about Babyland, childcare management, daycare software, preschool platform, parent communication app"
      path="/about"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Babyland",
        description: "Modern childcare management platform for parents and schools.",
        url: `${COMPANY.website}/about`,
        mainEntity: {
          "@type": "Organization",
          name: COMPANY.name,
          url: COMPANY.website,
          description: "Childcare, daycare, and preschool management platform.",
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
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            About Babyland
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Your Partner in <span className="text-gradient">Modern Childcare</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Babyland connects parents, teachers, and school administrators in one secure platform — making childcare
            management simpler, safer, and more transparent.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where every parent has real-time peace of mind and every childcare center operates with
              efficiency, transparency, and the highest standards of child safety — powered by thoughtful technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-blush-light flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower childcare centers, preschools, and daycares with an intuitive platform that strengthens
              parent-school partnerships, protects children's data, and simplifies daily operations — so caregivers
              can focus on what matters most: nurturing children.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Platform Overview</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Babyland is a cloud-based SaaS platform designed for childcare centers of all sizes. From attendance
            tracking to daily reports, gallery sharing, and fee management — everything your center needs in one app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-mint-light/30 rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-secondary-foreground" />
              <h2 className="text-2xl font-bold text-foreground">Why Parents Trust Babyland</h2>
            </div>
            <ul className="space-y-3">
              {parentTrust.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blush-light/30 rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <School className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Why Schools Choose Babyland</h2>
            </div>
            <ul className="space-y-3">
              {schoolBenefits.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: "Security", text: "Enterprise-grade encryption, role-based access, and continuous monitoring.", link: "/security" },
            { icon: ShieldCheck, title: "Privacy", text: "COPPA, GDPR, and DPDP compliant with transparent data practices.", link: "/privacy-policy" },
            { icon: Heart, title: "Child Safety", text: "Staff verification, consent-based media, and abuse reporting.", link: "/child-safety" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-all hover:-translate-y-1 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;

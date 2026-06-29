import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/config/routes";
import { COMPANY } from "@/lib/company";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-cta-gradient flex items-center justify-center shadow-soft">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-foreground">Babyland</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern childcare management for parents, teachers, and schools.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Legal</h3>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Company</h3>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.company.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Safety & Compliance */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Safety & Compliance</h3>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.safety.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/gdpr" className="hover:text-foreground transition-colors">
              GDPR
            </Link>
            <Link to="/dpdp" className="hover:text-foreground transition-colors">
              DPDP Act
            </Link>
            <Link to="/acceptable-use" className="hover:text-foreground transition-colors">
              Acceptable Use
            </Link>
            <a
              href={`mailto:${COMPANY.email.general}`}
              className="hover:text-foreground transition-colors"
            >
              {COMPANY.email.general}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

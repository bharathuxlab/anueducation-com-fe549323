import { MapPin, Mail, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import anuLogo from "@/assets/anu-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-anu-footer to-anu-dark text-anu-footer-fg">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={anuLogo} alt="ANU" className="w-12 h-12 object-contain" />
              <h3 className="font-display text-lg font-bold text-primary-foreground">Acharya Nagarjuna<br/>University</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Established in 1976, one of the premier institutions of higher learning in Andhra Pradesh, accredited with NAAC A+ Grade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold text-primary-foreground mb-5 pb-2 border-b border-primary-foreground/10">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About ANU", href: "/about" },
                { label: "Administration", href: "/administration" },
                { label: "Academics", href: "/academics" },
                { label: "Student Verify", href: "/student-verify" },
                { label: "Contact", href: "/contact" },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="flex items-center gap-2 hover:text-secondary transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-display text-base font-bold text-primary-foreground mb-5 pb-2 border-b border-primary-foreground/10">Academics</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Courses Offered", href: "/academics" },
                { label: "University Colleges", href: "/university-colleges" },
                { label: "Rankings", href: "/ranking" },
                { label: "R & D Cell", href: "/rd-cell" },
                { label: "Placements", href: "/placements-gallery" },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="flex items-center gap-2 hover:text-secondary transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-bold text-primary-foreground mb-5 pb-2 border-b border-primary-foreground/10">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-secondary" />
                <span>Nagarjuna Nagar, Guntur – 522510, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>registrar@anueducation.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>helpcenter@anu.ac.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="shrink-0 text-secondary" />
                <span>www.anu.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs opacity-70">
          <p>© 2026 Acharya Nagarjuna University. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by ANU IT Cell</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

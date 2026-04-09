import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "SASHA", href: "#products" },
    { name: "AI Assistant", href: "#products" },
    { name: "JASMIN", href: "#products" },
    { name: "Jira Story Gauge", href: "#products" },
    { name: "NormSafe", href: "#products" },
    { name: "DocTrans", href: "/doc-trans" },
    { name: "EG Invoice Assistant", href: "/invoice-assistant" },
  ],
  company: [
    { name: "About AICOE", href: "#about" },
    { name: "Amplify Arena", href: "/amplify-arena" },
    { name: "Our Team", href: "#team" },
    { name: "Feasibilities", href: "#feasibilities" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Videos", href: "#videos" },
    { name: "Gallery", href: "#gallery" },
    { name: "EGIndia", href: "https://egindia.com", external: true },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:USR_aicoe@eg.dk", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="section-primary pt-20 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">AI</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-primary-foreground">AICOE</span>
                <span className="block text-xs text-primary-foreground/70">by EGIndia</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              AI Center of Excellence - Transforming businesses through innovative 
              artificial intelligence solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.name}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} AICOE by EGIndia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

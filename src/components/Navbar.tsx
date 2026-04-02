import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import egLogo from "@/data/images/EG LOGO.png";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Products", href: "/#products" },
  { name: "Amplify Arena", href: "/amplify-arena" },
  { name: "Feasibilities", href: "/#feasibilities" },
  { name: "BU <> AICOE Engagements", href: "/#aicoe-bu-interactions" },
  // videos removed per updated design
  { name: "Gallery", href: "/#gallery" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (isHomePage) {
        // On home page, just scroll to section
        const sectionId = href.replace("/#", "#");
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to home with hash
        window.location.href = href;
      }
    } else {
      // For page routes like /amplify-arena, navigate directly
      window.location.href = href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={egLogo} alt="EG Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className={`font-display font-bold text-xl ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                EG India
              </span>
              <span className={`block text-xs ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                AICOE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick("/#contact")}
              className="btn-accent px-6 py-2.5 text-sm"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleNavClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-foreground font-medium py-2 hover:text-accent transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  handleNavClick("/#contact");
                  setIsMobileMenuOpen(false);
                }}
                className="btn-accent text-center mt-4"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

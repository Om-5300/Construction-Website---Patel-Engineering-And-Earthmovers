import {
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import {
  addBreadcrumbSchema,
  addOrganizationSchema,
  addServiceSchema,
} from "../../utils/structuredData";
import "./RootLayout.css";

export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    addOrganizationSchema();
    addServiceSchema();
  }, []);

  useEffect(() => {
    // Dynamically generate breadcrumbs based on path
    const pathParts = location.pathname.split("/").filter((p) => p);
    const breadcrumbs = [
      { name: "Home", url: "https://patelengineeringandearthmovers.in/" },
    ];

    let currentPath = "";
    pathParts.forEach((part) => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        name: part.charAt(0).toUpperCase() + part.slice(1),
        url: `https://patelengineeringandearthmovers.in${currentPath}`,
      });
    });

    addBreadcrumbSchema(breadcrumbs);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/clients", label: "Clients" },
    { path: "/gallery", label: "Gallery" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="layout-wrapper">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src={getCloudinaryUrl(
                "patel_engineering__earthmovers_logo.png",
                "w_900,f_auto,q_auto",
              )}
              alt="Patel Engineering Logo"
              className="navbar-logo-img"
            />
          </Link>
          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-toggle"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary"
                style={{ marginTop: "1rem", justifyContent: "center" }}
              >
                Get a Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Link to="/" className="footer-logo">
                <img
                  src={getCloudinaryUrl(
                    "patel_engineering__earthmovers_logo.png",
                    "w_900,f_auto,q_auto",
                  )}
                  alt="Patel Engineering Logo"
                  className="footer-logo-img"
                />
              </Link>
              <p
                style={{
                  color: "#9ca3af",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Delivering high-quality earthmoving solutions and heavy
                equipment rentals across Gujarat since 1998. Your trusted
                partner in infrastructure development.
              </p>
              <h4>Social Media</h4>
              <div className="social-links">
                <a
                  href="https://www.youtube.com/@hemantbarasara924"
                  className="social-icon"
                  title="YouTube"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.instagram.com/patelengineeringandearthmovers?igsh=MWZ2MWg5bGJieTZvMw=="
                  className="social-icon"
                  title="Instagram"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/people/Hemant-Barasara/pfbid02vhar5tPY9MPX73KtEFfHYaMWkWhn9qtF47kTsrsyoaNFPcsuntwn4gGrhQE9H5SNl/?mibextid=ZbWKwL"
                  className="social-icon"
                  title="Facebook"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Navigation</h4>
              <ul className="footer-links">
                {navLinks.map((l) => (
                  <li key={l.path} className="footer-link-item">
                    <Link to={l.path} className="footer-link">
                      <ChevronRight size={14} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Fleet</h4>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <Link to="/services" className="footer-link">
                    <ChevronRight size={14} /> Hanomag K7 Dozer
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services" className="footer-link">
                    <ChevronRight size={14} /> Heavy Excavators
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services" className="footer-link">
                    <ChevronRight size={14} /> Vibratory Rollers
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services" className="footer-link">
                    <ChevronRight size={14} /> Earthmovers
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services" className="footer-link">
                    <ChevronRight size={14} /> Site Preparation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get in Touch</h4>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" size={20} />
                <div className="footer-contact-text">
                  <strong>Our Office</strong>
                  <a
                    href="https://maps.app.goo.gl/6k4sqnrYkMvmEPEC7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Morbi, Gujarat, India.
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" size={20} />
                <div className="footer-contact-text">
                  <strong>Phone Support</strong>
                  <a
                    href="tel:+919825735300"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    +91 98257 35300
                  </a>
                  <a
                    href="tel:+919712235300"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    +91 97122 35300
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" size={20} />
                <div className="footer-contact-text">
                  <strong>Email Address</strong>
                  <a
                    href="mailto:hemantbarasara@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    hemantbarasara@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Patel Engineering & Earthmovers.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919825735300?text=Hello%20Patel%20Engineering%20%26%20Earthmovers%2C%20I%20would%20like%20to%20inquire%20about%20your%20equipment%20rental%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={getCloudinaryUrl(
            "whatsapp_icon_snndwi_.png",
            "w_400,f_auto,q_auto",
          )}
          alt="WhatsApp"
          style={{ width: "28px", height: "28px" }}
        />
      </a>
    </div>
  );
}

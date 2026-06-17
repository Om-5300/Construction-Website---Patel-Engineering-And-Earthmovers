import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import "./RootLayout.css";

export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
              src={getCloudinaryUrl("patel_engineering__earthmovers_logo.png", "w_900,f_auto,q_auto")}
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
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-toggle">
             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
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
              <Link to="/contact" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
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
                  src={getCloudinaryUrl("patel_engineering__earthmovers_logo.png", "w_900,f_auto,q_auto")}
                  alt="Patel Engineering Logo"
                  className="footer-logo-img"
                />
              </Link>
              <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '2rem' }}>
                Delivering high-quality earthmoving solutions and heavy equipment rentals across Gujarat since 1998. Your trusted partner in infrastructure development.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon"><Facebook size={18} /></a>
                <a href="#" className="social-icon"><Instagram size={18} /></a>
                <a href="#" className="social-icon"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Navigation</h4>
              <ul className="footer-links">
                {navLinks.map(l => (
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
                <li className="footer-link-item"><span className="footer-link"><ChevronRight size={14} /> Hanomag K7 Dozer</span></li>
                <li className="footer-link-item"><span className="footer-link"><ChevronRight size={14} /> Heavy Excavators</span></li>
                <li className="footer-link-item"><span className="footer-link"><ChevronRight size={14} /> Vibratory Rollers</span></li>
                <li className="footer-link-item"><span className="footer-link"><ChevronRight size={14} /> Earthmovers</span></li>
                <li className="footer-link-item"><span className="footer-link"><ChevronRight size={14} /> Site Preparation</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get in Touch</h4>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" size={20} />
                <div className="footer-contact-text">
                  <strong>Our Office</strong>
                  Morbi, Gujarat, India.
                </div>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" size={20} />
                <div className="footer-contact-text">
                  <strong>Phone Support</strong>
                  +91 98257 35300<br/>
                  +91 97122 35300
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" size={20} />
                <div className="footer-contact-text">
                  <strong>Email Address</strong>
                  hemantbarasara@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms & Conditions</a>
              <a href="#" className="footer-bottom-link">Sitemap</a>
            </div>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Patel Engineering & Earthmovers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919825735300"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
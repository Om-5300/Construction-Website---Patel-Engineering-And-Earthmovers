import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Trophy,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import { updateSEO } from "../../utils/seo";
import "./Home.css";

export function Home() {
  useEffect(() => {
    updateSEO({
      title: "Patel Engineering & Earthmovers | Heavy Equipment Rental Gujarat",
      description:
        "Professional earthmoving equipment rental in Morbi, Gujarat. High-quality Hanomag dozers, excavators, and heavy machinery since 1998. Get competitive quotes today!",
      keywords:
        "earthmoving equipment, heavy machinery rental, dozer rental, excavator rental, equipment rental Morbi, construction equipment, equipment hire Gujarat",
      ogTitle: "Patel Engineering & Earthmovers - Heavy Equipment Rental",
      ogDescription:
        "Professional earthmoving equipment rental and heavy machinery services in Morbi, Gujarat",
      canonicalUrl: "https://patelengineeringandearthmovers.in/",
    });
  }, []);

  const stats = [
    { label: "Years Experience", value: "25+", icon: Trophy },
    { label: "Projects Completed", value: "100+", icon: CheckCircle2 },
    { label: "Equipment Fleet", value: "10+", icon: Truck },
    { label: "States Covered", value: "5", icon: Building2 },
  ];

  const featuredServices = [
    {
      title: "Dozer Services",
      slug: "dozer-services",
      desc: "Specialized in Hanomag K7 Dozers for heavy earthmoving and grading.",
      image: getCloudinaryUrl(
        "Dozer_service_ee0zqk",
        "w_700,h_525,c_fill,g_auto,f_auto,q_auto:eco",
      ),
    },
    {
      title: "Excavator Rental",
      slug: "excavator-rental",
      desc: "High-performance excavators for precise digging and site preparation.",
      image: getCloudinaryUrl(
        "Excavator_service_pv5q2q",
        "w_700,h_525,c_fill,g_auto,f_auto,q_auto:eco",
      ),
    },
    {
      title: "Roller Solutions",
      slug: "roller-solutions",
      desc: "Vibratory rollers for optimal soil and asphalt compaction.",
      image: getCloudinaryUrl(
        "Roller_service_nq9wyh",
        "w_700,h_525,c_fill,g_auto,f_auto,q_auto:eco",
      ),
    },
  ];

  const projects = [
    {
      name: "Diamond Bourse",
      location: "Surat, Gujarat",
      image: getCloudinaryUrl(
        "Diamond_Bourse_hd3haq.webp",
        "w_900,h_900,c_fill,f_auto,q_auto",
      ),
    },
    {
      name: "GIFT City",
      location: "Gandhinagar, Gujarat",
      image: getCloudinaryUrl(
        "GIFT_CITY_obb8eb.webp",
        "w_900,h_900,c_fill,f_auto,q_auto",
      ),
    },
    {
      name: "Dholera Airport",
      location: "Dholera, Gujarat",
      image: getCloudinaryUrl(
        "Dholera_Airport_ugx9vt.webp",
        "w_900,h_900,c_fill,f_auto,q_auto",
      ),
    },
  ];

  const logos = [
    { name: "L&T CONSTRUCTION", id: "lt_logo__.webp" },
    { name: "PSP PROJECTS LTD", id: "psp_logo__.webp" },
    { name: "SHAPOORJI PALLONJI", id: "sp_logo.webp" },
    { name: "AFCON INFRASTRUCTURE", id: "afcon_logo_.webp" },
    { name: "M.S. KHURANA ENG. LTD", id: "msk_logo__.webp" },
    { name: "URC CONSTRUCTION", id: "URC_logo_tj7lhc.webp" },
    { name: "DILIP BUILDCON LTD", id: "Dilip_Buildcon_Logo_mepbsb.webp" },
    { name: "RANJIT BUILDCON LTD", id: "ranjeet_buildcon_logo_.webp" },
    { name: "BACKBONE ENTERPRISE LTD", id: "backbone_logo__.webp" },
    { name: "NCC LIMITED", id: "ncc_logo__.webp" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={getCloudinaryUrl(
                "hero_mobile_wo0qgs.webp",
                "w_768,h_1024,c_fill,g_auto,f_auto,q_auto",
              )}
            />

            <img
              src={getCloudinaryUrl(
                "hero_image_itdpch.webp",
                "w_1600,h_900,c_fill,g_auto,f_auto,q_auto",
              )}
              alt="Patel Engineering Heavy Fleet"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Gujarat's Premier Earthmovers</span>
            <h1 className="hero-title">
              Powering Your Projects <br />
              <span>With Trusted Earthmovers</span>
            </h1>
            <p className="hero-text">
              Specialized in Hanomag K7 Dozers and high-performance Excavators
              for heavy earthmoving across Gujarat since 1998.
            </p>
            <div className="btn-group">
              <Link to="/services" className="btn-primary">
                View Services <ArrowRight size={20} />
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Gallery <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container">
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon-box">
                <stat.icon size={28} />
              </div>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container section-padding">
        <div className="who-we-are-grid">
          <div className="who-image-box">
            <img
              src={getCloudinaryUrl(
                "Hero_Dozer_vruwwu",
                "w_700,h_560,c_fill,g_auto,f_auto,q_auto",
              )}
              alt="Patel Engineering Fleet"
              className="who-image"
            />
            <div className="experience-badge">
              <span className="exp-year">25</span>
              <span className="exp-text">
                Years of <br /> Excellence
              </span>
            </div>
          </div>

          <div className="who-content">
            <span className="teal-subtitle">WHO WE ARE</span>
            <h2 className="who-title">
              Gujarat's Trusted Name in <br />
              <span>Earthmoving Solutions</span>
            </h2>
            <div className="accent-line-left"></div>
            <p className="who-desc">
              Established in 1998,{" "}
              <strong>Patel Engineering & Earth Movers</strong> has been a
              pioneer in providing heavy-duty machinery for some of India's most
              significant infrastructure landmarks. Founded by{" "}
              <strong>Hemant K. Barasara</strong>, we specialize in
              high-performance Hanomag K7 Dozers and Excavators.
            </p>
            <p className="who-desc">
              Our mission is to empower construction giants and government
              bodies with reliable, well-maintained equipment and professional
              operators, ensuring every project is built on a strong foundation.
            </p>

            <Link to="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos - Infinite Scroll */}
      <section className="logos-section">
        <div className="logos-title">Trusted by Industry Leaders</div>
        <div className="marquee-container">
          <div className="marquee-track">
            {logos.map((logo, index) => (
              <div key={index} className="logo-card">
                <img
                  src={getCloudinaryUrl(
                    logo.id,
                    "w_250,h_100,c_fit,f_auto,q_auto",
                  )}
                  alt={logo.name}
                  className="logo-img"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.setAttribute(
                      "style",
                      "display: block",
                    );
                  }}
                />
                <span className="logo-text-item" style={{ display: "none" }}>
                  {logo.name}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="logo-card">
                <img
                  src={getCloudinaryUrl(
                    logo.id,
                    "h_200,c_fit,q_auto:best,dpr_auto",
                  )}
                  alt={logo.name}
                  className="logo-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.setAttribute(
                      "style",
                      "display: block",
                    );
                  }}
                />
                <span className="logo-text-item" style={{ display: "none" }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding container">
        <div className="section-header">
          <div className="accent-bar"></div>
          <h2>Our Featured Services</h2>
          <p>
            We provide comprehensive earthmoving solutions tailored to your
            project requirements.
          </p>
        </div>

        <div className="services-grid">
          {featuredServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={`/services`} className="card-link">
                  Learn More About {service.title} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Major Projects */}
      <section className="dark-section">
        <div className="container">
          <div className="projects-top">
            <div>
              <div className="accent-bar"></div>
              <h2>Major Projects</h2>
              <p style={{ color: "#9ca3af" }}>
                Our machinery has been part of some of India's biggest
                infrastructure landmarks.
              </p>
            </div>
            <Link
              to="/projects"
              className="btn-outline"
              style={{
                borderColor: "var(--primary-teal)",
                color: "var(--primary-teal)",
              }}
            >
              View All Projects
            </Link>
          </div>

          <div className="projects-grid-home">
            {projects.map((project, index) => (
              <div key={index} className="project-item-home">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay-home">
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p style={{ color: "var(--primary-teal)", fontWeight: 600 }}>
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-home">
        <div className="container cta-content">
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Get in touch with us for expert consultation and reliable heavy
            equipment rentals at competitive rates.
          </p>
          <Link to="/contact" className="btn-dark">
            Get a Quote Now
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "20rem",
            height: "20rem",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            filter: "blur(60px)",
            transform: "translate(50%, -50%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "20rem",
            height: "20rem",
            backgroundColor: "rgba(0,0,0,0.05)",
            borderRadius: "50%",
            filter: "blur(60px)",
            transform: "translate(-50%, 50%)",
          }}
        ></div>
      </section>
    </div>
  );
}

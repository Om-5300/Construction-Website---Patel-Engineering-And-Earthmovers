import { Award, Clock, Leaf, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import { updateSEO } from "../../utils/seo";
import "./About.css";

export function About() {
  useEffect(() => {
    updateSEO({
      title: "About Us | Patel Engineering & Earthmovers - 25+ Years Experience",
      description: "Learn about Patel Engineering & Earthmovers, Gujarat's trusted earthmoving equipment provider since 1998. Over 25 years of excellence in heavy machinery rental.",
      keywords: "about Patel Engineering, earthmoving company, heavy equipment provider, Morbi machinery rental, construction equipment history, Gujarat earthmovers",
      ogTitle: "About Patel Engineering & Earthmovers",
      ogDescription: "25+ years of trusted earthmoving equipment services in Gujarat",
      canonicalUrl: "https://patelengineeringandearthmovers.in/about"
    });
  }, []);

  const whyChooseUs = [
    {
      title: "WE DELIVER QUALITY",
      desc: "Our dozers are meticulously maintained for top performance, ensuring reliability and safety on every project. With skilled operators and stringent quality checks, high-standard results every time.",
      icon: Leaf
    },
    {
      title: "ALWAYS ON TIME",
      desc: "We guarantee punctual delivery of dozers and ensure projects are completed within your schedule. Our reliable service keeps your operations running smoothly and efficiently, without delays.",
      icon: Clock
    },
    {
      title: "WE ARE PASSIONATE",
      desc: "We are passionate about providing top-quality dozer rentals that empower your projects to succeed. Our dedicated team ensures that you receive reliable equipment and exceptional service every time.",
      icon: Users
    },
    {
      title: "PROFESSIONAL SERVICES",
      desc: "We provide expert earthmoving consultancy and professional on-site management to ensure every project meets international engineering standards.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="about-page">
      {/* High-Impact Header */}
      <div className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <Award size={14} />
              Established Excellence
            </span>
            <h1>The Journey of <span>Patel Eng. & Earthmovers</span></h1>
            <p>From a single machine in Morbi to Gujarat's leading earthmoving partner, we've spent 25 years building the foundations of progress.</p>
          </motion.div>
        </div>
      </div>

      {/* Company Story */}
      <section className="container section-padding">
        <div className="story-section">
          <div className="story-content">
            <h2>Trusted for Over Two Decades</h2>
            <div className="accent-line"></div>
            <p className="story-text">
              Founded in 1998 in Morbi, Gujarat, <strong>Patel Engineering & Earthmovers</strong> has grown from a local equipment provider to a regional leader in earthmoving solutions. Under the visionary leadership of <strong>Hemant K. Barasara</strong>, we have played a pivotal role in shaping the landscape of Gujarat.
            </p>
            <p className="story-text">
              Our journey started with a single machine and a commitment to quality. Today, we boast a comprehensive fleet of heavy-duty machinery, serving top-tier construction firms on some of the country's most ambitious projects.
            </p>
          </div>
          <div className="story-image-box">
            <img
              src={getCloudinaryUrl("about_us_story_image_gkrtmm.png", "w_800,f_auto,q_auto")}
              alt="About Us Story Image"
              className="story-image"
            />
          </div>
        </div>
      </section>

      {/* Owner Profile */}
      <section className="owner-section">
        <div className="container">
          <div className="owner-card">
            <div className="owner-image-box">
              <img src={getCloudinaryUrl("HEMANT_BARASARA_qlktt7.jpg", "w_800,f_auto,q_auto")} alt="Hemant K. Barasara" />
            </div>
            <div className="owner-info">
              <span>Founder & Owner</span>
              <h2>Hemant K. Barasara</h2>
              <p className="story-text" style={{ fontStyle: 'italic' }}>
                "Our philosophy is simple: provide the best machine for the job, backed by expert support. We don't just rent equipment; we partner in our clients' success."
              </p>
              <p className="story-text">
                With over 25 years of industry experience, Hemantbhai has steered the company through various technological shifts, always ensuring that the fleet remains state-of-the-art and ready for the toughest challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section - New Design */}
            <section className="why-choose-section">
              <div className="why-choose-overlay"></div>
              <div className="container relative-z">
              <div className="why-header">
                           <span className="teal-subtitle">WHY CHOOSE US?</span>
                        </div>
                <div className="why-grid">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="why-card"
                    >
                      <div className="icon-circle">
                        <item.icon size={32} />
                      </div>
                      <h3 className="why-card-title">{item.title}</h3>
                      <p className="why-card-desc">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
    </div>
  );
}

import { Award, CheckCircle2, Construction, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import { updateSEO } from "../../utils/seo";
import "./Clients.css";

export function Clients() {
  useEffect(() => {
    updateSEO({
      title: "Our Clients | Trusted Partners | Patel Engineering & Earthmovers",
      description: "Discover the leading companies and organizations that trust Patel Engineering & Earthmovers for their heavy equipment rental needs in Gujarat.",
      keywords: "client companies, partners, construction companies, industrial clients, equipment rental clients, project partners",
      ogTitle: "Our Clients - Patel Engineering & Earthmovers",
      ogDescription: "Companies and organizations that trust us",
      canonicalUrl: "https://patelengineeringandearthmovers.in/clients"
    });
  }, []);

  // Private Infrastructure Clients (Synced with Home Page)
  const privateClients = [
    {
      name: "L&T CONSTRUCTION",
      id: "lt_logo__.webp",
      description: "Partnering on major highway and bridge projects with heavy-duty excavation support."
    },
    {
      name: "PSP PROJECTS LTD",
      id: "psp_logo__.webp",
      description: "Providing precision grading and site preparation for high-rise commercial developments."
    },  
    {
      name: "SHAPOORJI PALLONJI",
      id: "sp_logo.webp",
      description: "Reliable equipment rental for landmark residential and institutional infrastructure."
    },
    {
      name: "AFCON INFRASTRUCTURE",
      id: "afcon_logo_.webp",
      description: "Supporting marine and port infrastructure with specialized earthmoving solutions."
    },
    {
      name: "M.S. KHURANA ENG. LTD",
      id: "msk_logo__.webp",
      description: "Long-term partnership for state-wide road construction and irrigation projects."
    },
    {
      name: "URC CONSTRUCTION",
      id: "URC_logo_tj7lhc.webp",
      description: "Executing large-scale industrial earthworks and foundation digging."
    },
    {
      name: "DILIP BUILDCON LTD",
      id: "Dilip_Buildcon_Logo_mepbsb.webp",
      description: "Critical equipment deployment for some of India's longest expressway stretches."
    },
    {
      name: "RANJIT BUILDCON LTD",
      id: "ranjeet_buildcon_logo_.webp",
      description: "Expert earthmoving services for metro rail and urban transport infrastructure."
    },
    {
      name: "BACKBONE ENTERPRISE LTD",
      id: "backbone_logo__.webp",
      description: "Infrastructure support for regional canal systems and water management."
    },
    {
      name: "NCC LIMITED",
      id: "ncc_logo__.webp",
      description: "Providing heavy machinery for integrated township and mining site preparation."
    }
  ];

  return (
    <div className="clients-page">
      {/* High-Impact Header */}
      <div className="clients-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <Award size={14} />
              Industry Recognized Trust
            </span>
            <h1>The Partners Who <br />Build <span>India's Future</span></h1>
            <p>From massive expressways to smart cities, we provide the machinery that powers the nation's biggest infrastructure creators.</p>
          </motion.div>
        </div>
      </div>

      {/* Trust & Methodology Section */}
      <section className="container section-padding">
        <div className="clients-intro-grid">
          <div className="intro-main">
            <h2 className="title-md">Excellence Through <span className="text-teal">Collaboration</span></h2>
            <div className="accent-line-left"></div>
            <p className="p-lg">
              Since 1998, Patel Engineering & Earthmovers has been more than just a rental service.
              We are strategic partners for India's leading EPC contractors and government bodies.
            </p>
            <div className="value-points">
              <div className="v-point">
                <CheckCircle2 className="text-teal" />
                <div>
                  <strong>Institutional Reliability</strong>
                  <p>Adhering to strict compliance and safety norms required by giants like L&T and NHAI.</p>
                </div>
              </div>
              <div className="v-point">
                <CheckCircle2 className="text-teal" />
                <div>
                  <strong>Specialized Hanomag Fleet</strong>
                  <p>Gujarat's largest dedicated fleet of K7 Dozers for massive earthmoving projects.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-side">
             <div className="stats-card-dark">
                <ShieldCheck size={48} className="text-teal" />
                <span className="big-stat">100%</span>
                <span className="stat-desc">Project Uptime Guarantee</span>
             </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Giants - Premium Card Grid */}
      <section className="clients-section-gray">
        <div className="container">
          <div className="section-title-center">
             <Construction size={40} className="text-teal" />
             <h2>Infrastructure & Construction Leaders</h2>
             <p>Our premium equipment is deployed across these organizations' most critical sites.</p>
          </div>

          <div className="premium-client-grid">
            {privateClients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="premium-client-card"
              >
                <div className="p-card-body">
                  <div className="p-logo-wrap">
                    <img
                      src={getCloudinaryUrl(client.id, "w_300,c_fit,f_auto,q_auto")}
                      alt={client.name}
                      className="p-logo-img"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-card-info">
                    <span className="p-client-name">{client.name}</span>
                    <span className="p-client-tag">Corporate Partner</span>
                    <p className="p-client-desc">{client.description}</p>
                  </div>
                </div>
                <div className="p-card-footer">
                  <div className="pulse-dot"></div>
                  <span>Equipment Deployed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="clients-final-cta">
        <div className="container">
          <div className="cta-gradient-box">
            <div className="cta-content">
              <h2>Partner with the Best in Gujarat</h2>
              <p>Ready to deploy high-performance machinery on your next landmark project?</p>
              <a href="/contact" className="btn-primary">Connect for Inquiry</a>
            </div>
            <div className="cta-pattern"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { CheckCircle2, ChevronRight, PenTool } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import { updateSEO } from "../../utils/seo";
import "./Services.css";

const services = [
  {
    id: "dozer",
    name: "Hanomag K7 Dozer",
    image: getCloudinaryUrl("Dozer_service_ee0zqk", "w_1200,h_900,c_fill,g_auto,q_auto:best"),
    specs: ["Engine: 110 HP", "Blade Size: 10 Feet", "Weight: 8.5 Tons"],
    useCases: ["Land Clearing", "Bulk Grading", "Site Preparation", "Road Construction"],
    description: "Our Hanomag K7 dozers are the workhorses of our fleet. Known for their reliability and power, they are perfect for large-scale earthmoving tasks in Gujarat's diverse terrain."
  },
  {
    id: "excavator",
    name: "Heavy Duty Excavators",
    image: getCloudinaryUrl("Excavator_service_pv5q2q", "w_1200,h_900,c_fill,g_auto,q_auto:best"),
    specs: ["Capacity: 20-30 Tons", "Bucket Volume: 0.9 - 1.5 m³", "Max Digging Depth: 6.5m", "Hydraulic Power: 150 kW"],
    useCases: ["Trenching", "Foundation Digging", "Demolition", "Material Handling"],
    description: "Equipped with the latest hydraulic technology, our excavators deliver high precision and efficiency for all digging and loading requirements."
  },
  {
    id: "roller",
    name: "Vibratory Rollers",
    image: getCloudinaryUrl("Roller_service_nq9wyh", "w_1200,h_900,c_fill,g_auto,q_auto:best"),
    specs: ["Operating Weight: 11 Tons", "Drum Width: 2.1m", "Frequency: 30-35 Hz", "Centrifugal Force: 250 kN"],
    useCases: ["Soil Compaction", "Asphalt Paving", "Sub-base Prep", "Road Maintenance"],
    description: "Ensure the stability of your structures with our high-impact vibratory rollers, designed for superior compaction on various soil types and surfaces."
  }
];

export function Services() {
  useEffect(() => {
    updateSEO({
      title: "Heavy Equipment & Machinery Rental | Services | Patel Engineering",
      description: "Professional earthmoving equipment rental services in Morbi, Gujarat. Hanomag dozers, excavators, vibratory rollers, and specialized machinery for construction projects.",
      keywords: "heavy equipment rental, dozer rental, excavator rental, vibratory roller, equipment services, earthmoving machinery, construction equipment Morbi",
      ogTitle: "Heavy Equipment & Machinery Rental Services",
      ogDescription: "Professional earthmoving equipment rental services including dozers, excavators, and rollers",
      canonicalUrl: "https://patelengineeringandearthmovers.in/services"
    });
  }, []);

  return (
    <div className="services-page">
      {/* High-Impact Header */}
      <div className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <PenTool size={14} />
              Professional Fleet
            </span>
            <h1>Machinery for <span>Every Challenge</span></h1>
            <p>We provide a comprehensive range of heavy-duty earthmoving equipment, maintained to the highest standards for maximum on-site productivity.</p>
          </motion.div>
        </div>
      </div>

      {/* Services List */}
      <div className="container">
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="service-image-box">
                <img src={service.image} alt={service.name} />
                <div className="card-overlay"></div>
              </div>

              <div className="service-info">
                <div>
                  <h2>{service.name}</h2>
                  <p className="service-desc">{service.description}</p>
                </div>

                <div className="specs-grid">
                  <div className="specs-col">
                    <h4>Specifications</h4>
                    <ul className="specs-list">
                      {service.specs.map(spec => (
                        <li key={spec} className="spec-item">
                          <CheckCircle2 size={16} />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="specs-col">
                    <h4>Common Use Cases</h4>
                    <ul className="specs-list">
                      {service.useCases.map(use => (
                        <li key={use} className="spec-item">
                          <CheckCircle2 size={16} />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem' }}>
                  <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2rem' }}>
                    Request This Equipment
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="trust-banner">
        <h3>Not sure which equipment you need?</h3>
        <p>Our expert consultants can help you choose the right machinery for your specific project needs and terrain conditions.</p>
        <a href="tel:+919825735300">Call +91 98257 35300</a>
      </div>
    </div>
  );
}

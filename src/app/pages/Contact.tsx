import { CheckCircle, Mail, MailCheck, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./Contact.css";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    equipment: "Hanomag K7 Dozer",
    message: ""
  });

  // PASTE YOUR GOOGLE SCRIPT URL HERE
  const GOOGLE_SHEET_URL = "YOUR_GOOGLE_SCRIPT_URL";

  useEffect(() => {
    document.title = "Contact Us | Get a Quote | Patel Engineering";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      // 1. Send data to Google Sheets
      if (GOOGLE_SHEET_URL !== "YOUR_GOOGLE_SCRIPT_URL") {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setFormStatus("success");

      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          equipment: "Hanomag K7 Dozer",
          message: ""
        });
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
      setFormStatus("idle");
    }
  };

  return (
    <div className="contact-page">
      {/* High-Impact Header */}
      <div className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <MailCheck size={14} />
              Instant Inquiry
            </span>
            <h1>Get a <span>Machinery Quote</span></h1>
            <p>Tell us about your project requirements. Our team in Morbi will provide you with a customized earthmoving solution and competitive pricing.</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-col">
            <div>
              <h2>Contact Information</h2>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p><a href="tel:+919825735300" style={{ color: 'var(--primary-teal)', textDecoration: 'none', cursor: 'pointer' }}>+91 98257 35300</a></p>
                    <p><a href="tel:+919712235300" style={{ color: 'var(--primary-teal)', textDecoration: 'none', cursor: 'pointer' }}>+91 97122 35300</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p style={{ wordBreak: 'break-all' }}><a href="mailto:hemantbarasara@gmail.com" style={{ color: 'var(--primary-teal)', textDecoration: 'none', cursor: 'pointer' }}>hemantbarasara@gmail.com</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div className="info-content">
                    <h4>Our Office</h4>
                    <p>Morbi, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="support-box">
              <h3><MessageSquare color="var(--primary-teal)" /> Direct Support</h3>
              <p style={{ color: '#4b5563' }}>Prefer to speak directly? Feel free to call us for immediate assistance regarding equipment availability.</p>
            </div>
          </div>

          <div className="contact-form-card">
            {formStatus === "success" && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="form-success-overlay">
                <div className="success-icon"><CheckCircle size={40} /></div>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 900, marginBottom: '1rem' }}>Inquiry Submitted!</h3>
                <p style={{ color: '#4b5563' }}>Thank you for reaching out. Your request has been recorded and we will contact you shortly.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-field">
                  <label>Your Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Full Name" />
                </div>
                <div className="form-field">
                  <label>Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="Company" />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label>Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-field">
                  <label>Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="email@example.com" />
                </div>
              </div>

              <div className="form-field" style={{ marginBottom: '1.5rem' }}>
                <label>Equipment Needed</label>
                <select name="equipment" value={formData.equipment} onChange={handleChange} className="form-input" style={{ cursor: 'pointer' }}>
                  <option>Hanomag K7 Dozer</option>
                  <option>Heavy Duty Excavator</option>
                  <option>Vibratory Roller</option>
                  <option>Bulk Machinery</option>
                </select>
              </div>

              <div className="form-field">
                <label>Your Message</label>
                <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="form-input" style={{ resize: 'none' }} placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button disabled={formStatus === "submitting"} type="submit" className={`submit-btn ${formStatus === "submitting" ? 'btn-disabled' : 'btn-enabled'}`}>
                {formStatus === "submitting" ? "Submitting..." : "Send Quote Request"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

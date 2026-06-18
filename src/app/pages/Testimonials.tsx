import { MessageSquareQuote, Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { updateSEO } from "../../utils/seo";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rajesh Mehta",
    company: "L&T Construction",
    quote: "Patel Engineering & Earthmovers provided top-notch equipment for our highway project. Their Hanomag K7 dozer was in excellent condition and helped us stay ahead of schedule.",
    rating: 5,
  },
  {
    name: "Sanjay Patel",
    company: "PSP Projects Ltd.",
    quote: "We've been working with Hemantbhai for several years now. Their reliability and professional approach make them our go-to partner for all earthmoving requirements.",
    rating: 5,
  },
  {
    name: "Amit Shah",
    company: "Shapoorji Pallonji",
    quote: "Reliable equipment and skilled operators. They understand the urgency of large-scale infrastructure projects and deliver accordingly.",
    rating: 5,
  },
  {
    name: "Vijay Gadhvi",
    company: "URC Construction",
    quote: "Their service support is outstanding. Any minor issues with the machinery were addressed immediately, ensuring zero downtime at our site.",
    rating: 4,
  },
  {
    name: "Deepak Sharma",
    company: "Afcon Infrastructure",
    quote: "Excellent fleet of excavators. We used them for the Mundra port expansion and the performance was consistently high.",
    rating: 5,
  },
  {
    name: "Kunal Jha",
    company: "Ranjit Buildcon Ltd.",
    quote: "Fair pricing and well-maintained machines. One of the best earthmoving rental services in Gujarat.",
    rating: 5,
  },
];

export function Testimonials() {
  useEffect(() => {
    updateSEO({
      title: "Client Testimonials & Reviews | Patel Engineering & Earthmovers",
      description: "Read testimonials and reviews from satisfied clients who have used Patel Engineering & Earthmovers' equipment rental services in Gujarat.",
      keywords: "client testimonials, customer reviews, equipment rental reviews, Patel Engineering testimonials, satisfied clients",
      ogTitle: "Client Testimonials - Patel Engineering",
      ogDescription: "See what our satisfied clients say about our services",
      canonicalUrl: "https://patelengineeringandearthmovers.in/testimonials"
    });
  }, []);

  return (
    <div className="testimonials-page">
      {/* High-Impact Header */}
      <div className="testimonials-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <MessageSquareQuote size={14} />
              Client Feedback
            </span>
            <h1>Trust from the <span>Industry</span></h1>
            <p>Hear from our valued partners about their experience working with Gujarat's most reliable earthmoving machinery fleet.</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="testimonial-card"
            >
              <Quote className="quote-icon" size={40} />
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`star-icon ${i < t.rating ? "star-filled" : "star-empty"}`}
                  />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="client-info">
                <h4>{t.name}</h4>
                <p>{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

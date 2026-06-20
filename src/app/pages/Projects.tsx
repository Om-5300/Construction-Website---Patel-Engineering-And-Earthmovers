import { Award, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import { updateSEO } from "../../utils/seo";
import "./Projects.css";

const projects = [
  {
    name: "Diamond Bourse",
    client: "PSP Projects Ltd.",
    location: "Surat, Gujarat",
    category: "Commercial",
    image: getCloudinaryUrl("Diamond_Bourse_hd3haq.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "GIFT City",
    client: "GIFTCL",
    location: "Gandhinagar, Gujarat",
    category: "Commercial",
    image: getCloudinaryUrl("GIFT_CITY_obb8eb.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "Mega Metro",
    client: "GMRC",
    location: "Ahmedabad, Gujarat",
    category: "Metro",
    image: getCloudinaryUrl("Mega_Metro_Project_haynde.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "Delhi–Mumbai Expressway",
    client: "NHAI / L&T",
    location: "Gujarat Stretch",
    category: "Expressway",
    image: getCloudinaryUrl("Delhi_Mumbai_Expressway_Project_bqszds.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "Dholera International Airport",
    client: "AAI",
    location: "Dholera, Gujarat",
    category: "Airport",
    image: getCloudinaryUrl("Dholera_Airport_ugx9vt.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "Hirasar(Rajkot) Airport",
    client: "AAI",
    location: "Hirasar, Rajkot, Gujarat",
    category: "Airport",
    image: getCloudinaryUrl("Hirasar_Airport_Project_fnd07t.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "Pipavav Port Expansion",
    client: "APM Terminals",
    location: "Amreli, Gujarat",
    category: "Port",
    image: getCloudinaryUrl("Pipavav_Port_Project_gfvbac.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
  {
    name: "Sabarmati Riverfront",
    client: "SRFDCL",
    location: "Ahmedabad, Gujarat",
    category: "Infrastructure",
    image: getCloudinaryUrl("Sabarmati_Riverfront_Project_thicbg.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
{
    name: "AM/NS Steel ",
    client: "SRFDCL",
    location: "Surat, Gujarat",
    category: "Industry",
    image: getCloudinaryUrl("AMNS_Steel_Project_qwhihh.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
{
    name: "Dholera-Ahmedabad Expressway ",
    client: "SRFDCL",
    location: "Gujarat Stretch",
    category: "Expressway",
    image: getCloudinaryUrl("Dholera_Ahmedabad_Expressway_zmllby.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
{
    name: "Maruti-Suzuki Limited",
    client: "SRFDCL",
    location: "Hansalpur",
    category: "Industry",
    image: getCloudinaryUrl("Maruti_Suzuki_Project_v3qy1p.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  },
{
    name: "Honda Automobile Manufacturing Plant",
    client: "SRFDCL",
    location: "Vithalapur, Ahmedabad",
    category: "Industry",
    image: getCloudinaryUrl("honda_project_ubspjx__.webp", "w_900,h_900,c_fill,f_auto,q_auto")
  }
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Expressway", "Airport", "Metro", "Port", "Commercial"];

  useEffect(() => {
    updateSEO({
      title: "Featured Projects | Infrastructure Portfolio | Patel Engineering",
      description: "Explore our portfolio of successful construction projects completed with professional earthmoving equipment and services across Gujarat.",
      keywords: "construction projects, project portfolio, infrastructure projects, earthmoving projects, Patel Engineering projects, Gujarat construction",
      ogTitle: "Featured Projects - Patel Engineering",
      ogDescription: "Successful construction projects completed with professional equipment",
      canonicalUrl: "https://patelengineeringandearthmovers.in/projects"
    });
  }, []);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      {/* High-Impact Header */}
      <div className="projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <Award size={14} />
              Landmark Achievements
            </span>
            <h1>Our Portfolio of <span>Excellence</span></h1>
            <p>Showcasing our contribution to India's most significant infrastructure projects through reliable heavy equipment solutions.</p>
          </motion.div>
        </div>
      </div>

      <div className="container section-padding">

        {/* Project Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card"
              >
                <div className="project-image-box">
                  <img src={project.image} alt={project.name} />
                  <div className="project-category">
                    {project.category}
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.name}</h3>

                  <div className="project-details">
                    {/* <div className="detail-item">
                      <User size={18} />
                      <span><span className="detail-label">Client:</span> {project.client}</span>
                    </div> */}
                    <div className="detail-item">
                      <MapPin size={18} />
                      <span><span className="detail-label">Location:</span> {project.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}

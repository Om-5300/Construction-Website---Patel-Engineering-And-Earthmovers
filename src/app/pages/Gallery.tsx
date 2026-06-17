import { useState, useEffect } from "react";
import { Camera, Video, Play, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import "./Gallery.css";

const galleryImages = [
  { id: 1, category: "Equipment", url: "https://picsum.photos/id/1070/800/600", title: "Excavator at Work" },
  { id: 2, category: "Project Sites", url: "https://picsum.photos/id/1071/800/600", title: "Road Construction" },
  { id: 3, category: "Team", url: "https://picsum.photos/id/1072/800/600", title: "Our Engineers" },
  { id: 4, category: "Equipment", url: "https://picsum.photos/id/1073/800/600", title: "Heavy Dozer" },
  { id: 5, category: "Project Sites", url: "https://picsum.photos/id/1074/800/600", title: "Bridge Foundation" },
  { id: 6, category: "Equipment", url: "https://picsum.photos/id/1075/800/600", title: "Vibratory Roller" },
];

const galleryVideos = [
  { id: 1, title: "Dozer Site Operations", thumbnail: "https://picsum.photos/id/1076/800/600", duration: "0:45" },
  { id: 2, title: "Excavator Precision Digging", thumbnail: "https://picsum.photos/id/1077/800/600", duration: "1:20" },
  { id: 3, title: "Highway Compaction Process", thumbnail: "https://picsum.photos/id/1078/800/600", duration: "2:15" },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  useEffect(() => {
    document.title = "Gallery | Patel Engineering & Earth Movers";
  }, []);

  return (
    <div className="gallery-page">
      {/* High-Impact Header */}
      <div className="gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <span className="premium-badge">
              <Camera size={14} />
              Visual Portfolio
            </span>
            <h1>Operations in <span>Action</span></h1>
            <p>Experience the scale of our projects and the power of our machinery through our visual library.</p>
          </motion.div>
        </div>
      </div>

      <div className="container section-padding">
        {/* Tab Switcher */}
        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            <Camera size={20} />
            Photos
          </button>
          <button
            className={`gallery-tab ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <Video size={20} />
            Videos
          </button>
        </div>

        {/* Content Section */}
        <div className="gallery-content">
          <AnimatePresence mode="wait">
            {activeTab === 'photos' ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="gallery-grid"
              >
                {galleryImages.map((image) => (
                  <div key={image.id} className="gallery-item">
                    <img src={image.url} alt={image.title} />
                    <div className="gallery-overlay">
                      <div className="overlay-icons">
                        <Maximize2 size={24} />
                      </div>
                      <div className="overlay-text">
                        <span>{image.category}</span>
                        <h3>{image.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="video-grid"
              >
                {galleryVideos.map((video) => (
                  <div key={video.id} className="video-card">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-button">
                        <Play fill="white" size={32} />
                      </div>
                      <span className="video-duration">{video.duration}</span>
                    </div>
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <p>On-site action from our latest infrastructure project.</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

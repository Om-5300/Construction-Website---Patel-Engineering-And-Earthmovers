import { Camera, Maximize2, Video } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { getCloudinaryUrl, getCloudinaryVideoUrl } from "../../utils/cloudinary";
import "./Gallery.css";

const galleryImages = [
  { id: 1, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image1_cusxts.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 2, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image2_gfxjq7.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 3, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image3_wcjel0.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 4, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image4_y3rvk2.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 5, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image5_ebikte.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 6, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image6_dyt7vm.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 7, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image7_mrrefr.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 8, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image8_yasb2h.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" },
  { id: 9, category: "Project Sites", url: getCloudinaryUrl("Hanomag_K7_Dozer_image9_ix2wug.jpg", "w_800,h_600,c_fill,q_auto:best"), title: "Hanomag K7 Dozer" }
];

const galleryVideos = [
  { id: 1, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("dozer_site_operations_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video1_riokb4.mp4", "q_auto:best"), duration: "0:45" },
  { id: 2, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("excavator_precision_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video2_ozmiqt.mp4", "q_auto:best"), duration: "1:20" },
  { id: 3, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video3_rj1rzm.mp4", "q_auto:best"), duration: "2:15" },
  { id: 4, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video4_gpuyz2.mp4", "q_auto:best"), duration: "2:15" },
  { id: 5, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video5_da8dtg.mp4", "q_auto:best"), duration: "2:15" },
  { id: 6, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video6_ydisyo.mp4", "q_auto:best"), duration: "2:15" },
  { id: 7, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video7_et7a7k.mp4", "q_auto:best"), duration: "2:15" },
  { id: 8, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video8_kcdrkh.mp4", "q_auto:best"), duration: "2:15" },
  { id: 9, title: "Dozer Site Operations", thumbnail: getCloudinaryUrl("highway_compaction_thumb.jpg", "w_800,h_600,c_fill,q_auto:best"), url: getCloudinaryVideoUrl("Hanomag_K7_Dozer_Video9_wgrlxg.mp4", "q_auto:best"), duration: "2:15" }
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [videoDurations, setVideoDurations] = useState<Record<number, string>>({});

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds) || seconds <= 0) return "0:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const mm = mins.toString().padStart(2, '0');
    const ss = secs.toString().padStart(2, '0');
    return hrs > 0 ? `${hrs}:${mm}:${ss}` : `${mins}:${ss}`;
  };

  const handleLoadedMetadata = (id: number) => (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    const formatted = formatTime(vid.duration);
    setVideoDurations((prev) => ({ ...prev, [id]: formatted }));
  };

  const openVideoFullscreen = (container: HTMLElement | null) => {
    if (!container) return;
    const vid = container.querySelector('video') as HTMLVideoElement | null;
    if (!vid) return;
    // Ensure controls visible in fullscreen
    vid.controls = true;
    vid.play().catch(() => {});
    const requestFS = vid.requestFullscreen || (vid as any).webkitRequestFullscreen || (vid as any).msRequestFullscreen;
    if (requestFS) {
      requestFS.call(vid);
    } else {
      // fallback: open video src in new tab
      window.open(vid.currentSrc || vid.src, '_blank', 'noopener');
    }
  };

  // Modal-based fullscreen player (more reliable across browsers)
  const [activeVideo, setActiveVideo] = useState<{ id: number; src: string } | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const openVideoModal = (video: { id: number; url: string }) => {
    setActiveVideo({ id: video.id, src: video.url });
  };

  const closeVideoModal = () => {
    try {
      const v = modalVideoRef.current;
      if (v) {
        v.pause();
        v.src = '';
      }
    } catch {}
    setActiveVideo(null);
  };

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
                    <div
                      className="video-thumbnail"
                      onClick={() => openVideoModal(video)}
                    >
                      <button
                        className="fullscreen-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideoModal(video);
                        }}
                        aria-label="Open fullscreen"
                      >
                        <Maximize2 size={18} />
                      </button>
                      <video
                        className="video-element"
                        src={video.url}
                        poster={video.thumbnail}
                        playsInline
                        autoPlay
                        muted
                        loop
                        controls={false}
                        onLoadedMetadata={handleLoadedMetadata(video.id)}
                      />
                      <span className="video-duration">{videoDurations[video.id] ?? video.duration}</span>
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

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true">
          <div className="video-modal-inner">
            <button className="video-modal-close" onClick={closeVideoModal} aria-label="Close">✕</button>
            <video
              ref={modalVideoRef}
              className="video-modal-player"
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
}

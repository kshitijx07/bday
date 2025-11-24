import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const SurpriseVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Show video immediately
    setShowVideo(true);
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      // Small delay to ensure video is loaded
      const timer = setTimeout(() => {
        const playVideo = async () => {
          try {
            // Play the video
            await videoRef.current.play();
            
            // Request fullscreen on mobile for immersive experience
            setTimeout(() => {
              if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen().catch(() => {
                  console.log('Fullscreen not supported or denied');
                });
              } else if (videoRef.current.webkitEnterFullscreen) {
                // iOS Safari
                videoRef.current.webkitEnterFullscreen();
              } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
              } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
              }
            }, 100);
          } catch (error) {
            console.log('Auto-play prevented, user will need to tap play');
          }
        };
        
        playVideo();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="surprise-section"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="video-container-fullscreen"
      >
        <motion.h3 
          className="video-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your Special Surprise 💕
        </motion.h3>
        
        <div className="video-player-fullscreen">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: '#000',
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
            <source src="/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <motion.p 
          className="video-caption"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I hope this makes you smile as much as you make me smile every day ❤️
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default SurpriseVideo;

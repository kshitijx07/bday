import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const SurpriseVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
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
            // Mute video first for auto-play (Chrome requirement)
            videoRef.current.muted = true;
            
            // Play the video
            await videoRef.current.play();
            
            // Unmute after playing starts
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.muted = false;
              }
            }, 100);
            
            // Request fullscreen on mobile
            setTimeout(() => {
              if (videoRef.current) {
                if (videoRef.current.requestFullscreen) {
                  videoRef.current.requestFullscreen().catch(() => {
                    console.log('Fullscreen not supported');
                  });
                } else if (videoRef.current.webkitEnterFullscreen) {
                  videoRef.current.webkitEnterFullscreen();
                } else if (videoRef.current.mozRequestFullScreen) {
                  videoRef.current.mozRequestFullScreen();
                }
              }
            }, 200);
          } catch (error) {
            console.log('Auto-play prevented, showing tap to play');
            setNeedsInteraction(true);
          }
        };
        
        playVideo();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  const handleVideoClick = async () => {
    if (needsInteraction && videoRef.current) {
      try {
        videoRef.current.muted = false;
        await videoRef.current.play();
        setNeedsInteraction(false);
        
        // Try fullscreen
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen().catch(() => {});
        } else if (videoRef.current.webkitEnterFullscreen) {
          videoRef.current.webkitEnterFullscreen();
        }
      } catch (error) {
        console.log('Play failed');
      }
    }
  };

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
        
        <div 
          className="video-player-fullscreen"
          onClick={handleVideoClick}
          style={{ cursor: needsInteraction ? 'pointer' : 'default' }}
        >
          <video
            ref={videoRef}
            controls
            playsInline
            preload="auto"
            autoPlay
            muted
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
          
          {needsInteraction && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(255, 154, 203, 0.9)',
                padding: '20px 40px',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                pointerEvents: 'none',
              }}
            >
              Tap to Play 💖
            </motion.div>
          )}
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

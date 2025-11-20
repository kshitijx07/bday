import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const SurpriseVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleReveal = () => {
    setShowVideo(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="surprise-section"
    >
      {!showVideo ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="surprise-reveal"
        >
          <motion.h2
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="surprise-title"
          >
            Your Surprise ❤️
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleReveal}
            className="reveal-button"
            animate={{
              boxShadow: [
                "0 20px 60px rgba(255, 20, 147, 0.4)",
                "0 25px 70px rgba(255, 20, 147, 0.6)",
                "0 20px 60px rgba(255, 20, 147, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="heart-button-icon"
            >
              <FaHeart size={50} />
            </motion.div>
            <span>Click to Play</span>
          </motion.button>

          <div className="sparkle-ring">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="ring-sparkle"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-100px)`,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="video-container glass-card"
        >
          <h3 className="video-title">Made With Love Just For You 💕</h3>
          <div className="video-player">
            <video
              controls
              playsInline
              preload="metadata"
              webkit-playsinline="true"
              x5-playsinline="true"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                objectFit: 'contain',
                backgroundColor: '#000',
              }}
              onLoadedMetadata={(e) => {
                // Try to auto-play, but respect browser policies
                e.target.play().catch(() => {
                  // Auto-play blocked, user will click play button
                  console.log('Auto-play prevented');
                });
              }}
            >
              <source src="/video.mp4" type="video/mp4" />
              <source src="/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="video-caption">
            I hope this makes you smile as much as you make me smile every day ❤️
          </p>
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#ff9acb', 
            marginTop: '15px',
            textAlign: 'center'
          }}>
            💡 Place your video file as "video.mp4" in the public folder
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default SurpriseVideo;

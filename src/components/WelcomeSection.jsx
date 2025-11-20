import { motion } from "framer-motion";
import { FaArrowRight, FaGift } from "react-icons/fa";

const WelcomeSection = ({ onContinue }) => {
  // Balloons data
  const balloons = [
    { id: 1, color: "#ff6b9d", left: "10%", delay: 0 },
    { id: 2, color: "#ff9acb", left: "25%", delay: 0.3 },
    { id: 3, color: "#ffd700", left: "75%", delay: 0.6 },
    { id: 4, color: "#ff1493", left: "90%", delay: 0.9 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="welcome-section-new"
    >
      {/* Balloons */}
      <div className="balloons-container">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            className="balloon"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: ["-20vh", "-30vh", "-20vh"],
              x: [0, 20, 0],
              opacity: 1,
            }}
            transition={{
              duration: 4,
              delay: balloon.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: balloon.left }}
          >
            <div className="balloon-body" style={{ backgroundColor: balloon.color }}>
              <div className="balloon-shine" />
            </div>
            <div className="balloon-string" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="welcome-content">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="celebration-icon"
        >
          🎉
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="main-title"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="name-title"
        >
          My Love 💖
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 150 }}
          className="subtitle-box"
        >
          <p className="subtitle-text">The world just got luckier since you were born</p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="welcome-message"
        >
          <p className="welcome-description">
            I've prepared something special for you... 
            <br />
            But you'll have to unlock each layer to discover it! 🎁
          </p>
        </motion.div>

        {/* Decorative stars */}
        <div className="stars-container">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="star"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${15 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            >
              ⭐
            </motion.div>
          ))}
        </div>

        {/* Continue button */}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="continue-button"
        >
          <FaGift className="gift-icon" />
          <span>Start the Adventure</span>
          <FaArrowRight className="arrow-icon" />
        </motion.button>
      </div>

      {/* Floating hearts */}
      <div className="floating-hearts-new">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-heart-new"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WelcomeSection;

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const LoveLetterReveal = ({ onContinue }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="letter-section"
    >
      <div className="letter-container">
        <motion.div
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="letter-card glass-card"
        >
          <motion.div
            className="envelope-icon"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaEnvelope size={60} color="#ff9acb" />
          </motion.div>

          <h2 className="letter-title">A Special Note For You 💌</h2>

          <motion.div
            className="letter-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="letter-text">
              Every moment with you feels like a dream come true.
              <br /><br />
              You make my world brighter, my days happier, and my heart fuller.
              <br /><br />
              Today is YOUR day, and I want to make it as special as you are to me.
              <br /><br />
              Keep going to discover more surprises! 🎁
            </p>
          </motion.div>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="continue-button"
          >
            <span>Continue Journey</span>
            <FaArrowRight className="arrow-icon" />
          </motion.button>
        </motion.div>

        {/* Floating sparkles */}
        <div className="sparkles-container">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              animate={{
                y: [0, -50, -100],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${5 + i * 8}%`,
                bottom: "10%",
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LoveLetterReveal;

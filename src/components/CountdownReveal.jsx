import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const CountdownReveal = ({ onContinue }) => {
  const [count, setCount] = useState(3);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, [count]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="countdown-section"
    >
      <div className="countdown-container">
        {count > 0 ? (
          <motion.div
            key={count}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="countdown-number"
          >
            {count}
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="reveal-icon"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
            >
              🎁
            </motion.div>
            <h2 className="reveal-title">Get Ready!</h2>
            <p className="reveal-text">
              Something special is waiting for you...
            </p>
            
            {showButton && (
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContinue}
                className="continue-button"
              >
                <span>Continue</span>
                <FaArrowRight className="arrow-icon" />
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Floating hearts */}
        <div className="floating-elements">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-heart"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CountdownReveal;

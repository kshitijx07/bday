import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CountdownReveal = ({ onContinue, autoStart = false }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else if (autoStart) {
      // Auto-continue after countdown if autoStart is true
      const timer = setTimeout(() => onContinue(), 500);
      return () => clearTimeout(timer);
    }
  }, [count, autoStart, onContinue]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="countdown-section"
    >
      <div className="countdown-container">
        {count > 0 ? (
          <motion.div
            key={count}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
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
              transition={{ duration: 0.5 }}
            >
              🎁
            </motion.div>
            <h2 className="reveal-title">Get Ready!</h2>
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

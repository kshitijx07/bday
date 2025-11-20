import { motion } from "framer-motion";
import { useState } from "react";
import { FaLock, FaUnlock, FaHeart, FaLightbulb } from "react-icons/fa";

const QuizLayer = ({ question, onCorrect, layerNumber }) => {
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if answer is correct (case-insensitive)
    if (answer.toLowerCase().trim() === question.answer.toLowerCase()) {
      // Correct answer!
      setShowWrong(false);
      setTimeout(() => {
        onCorrect();
      }, 1000);
    } else {
      // Wrong answer
      setShowWrong(true);
      setAttempts(attempts + 1);
      
      // Show hint after 2 wrong attempts
      if (attempts >= 1) {
        setShowHint(true);
      }
      
      // Shake animation
      setTimeout(() => {
        setShowWrong(false);
      }, 2000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="quiz-layer"
    >
      <div className="quiz-container">
        {/* Lock icon */}
        <motion.div
          className="lock-icon"
          animate={showWrong ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {showWrong ? (
            <FaLock size={80} color="#ff6b9d" />
          ) : (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaLock size={80} color="#ff9acb" />
            </motion.div>
          )}
        </motion.div>

        {/* Layer number */}
        <motion.div
          className="layer-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <span className="layer-number">Layer {layerNumber}</span>
        </motion.div>

        {/* Question */}
        <motion.h2
          className="quiz-question"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {question.question}
        </motion.h2>

        {/* Answer form */}
        <motion.form
          onSubmit={handleSubmit}
          className="quiz-form"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            className={`quiz-input ${showWrong ? 'wrong-shake' : ''}`}
            autoFocus
          />
          
          <motion.button
            type="submit"
            className="quiz-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUnlock /> Unlock Next Layer
          </motion.button>
        </motion.form>

        {/* Wrong answer message */}
        <AnimatePresence>
          {showWrong && (
            <motion.div
              className="wrong-message"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p>{question.wrongMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint button */}
        <motion.button
          className="hint-button"
          onClick={() => setShowHint(!showHint)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: attempts >= 1 ? 1 : 0.5 }}
        >
          <FaLightbulb /> {showHint ? "Hide Hint" : "Need a Hint?"}
        </motion.button>

        {/* Hint message */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              className="hint-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <FaLightbulb className="hint-icon" />
              <p>{question.hint}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating hearts */}
        <div className="quiz-hearts">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="quiz-heart"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 15}%`,
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

// Add AnimatePresence import at the top
import { AnimatePresence } from "framer-motion";

export default QuizLayer;

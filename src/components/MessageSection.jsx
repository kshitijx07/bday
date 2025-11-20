import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const MessageSection = ({ onContinue }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  
  const fullMessage = `My Dearest Love,

On this special day, I want you to know how incredibly blessed I feel to have you in my life. Every moment with you is a treasure, every smile you share brightens my world, and every laugh we share together creates memories I'll cherish forever.

You are not just my girlfriend, you are my best friend, my confidant, and my greatest adventure. Your kindness, your beauty (inside and out), and your amazing spirit inspire me every single day.

I promise to always make you smile, to support your dreams, to hold your hand through every challenge, and to love you more with each passing day.

Happy Birthday, my beautiful angel. Here's to many more years of love, laughter, and unforgettable moments together.

Forever yours,
With all my love ❤️`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [fullMessage]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="message-section"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        A Special Message For You 💌
      </motion.h2>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="message-card glass-card"
      >
        <div className="message-content">
          <p className="message-text">{displayedText}</p>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="cursor"
          >
            |
          </motion.span>
        </div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="heartbeat-icon"
        >
          💖
        </motion.div>

        {showButton && (
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="continue-button"
            style={{ marginTop: '30px' }}
          >
            <span>Continue</span>
            <FaArrowRight className="arrow-icon" />
          </motion.button>
        )}

        <div className="floating-sparkles">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle-dot"
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${10 + i * 12}%`,
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MessageSection;

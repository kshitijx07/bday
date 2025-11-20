import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart, FaStar, FaSmile, FaGem, FaCrown, FaMagic } from "react-icons/fa";

const LoveFacts = () => {
  const [clickedCards, setClickedCards] = useState([]);

  const facts = [
    { id: 1, text: "You are 100% cute", icon: FaHeart, color: "#ff9acb" },
    { id: 2, text: "You officially stole my heart", icon: FaGem, color: "#ffb3d9" },
    { id: 3, text: "You look extra pretty today", icon: FaStar, color: "#ffc4e1" },
    { id: 4, text: "Your smile lights up my world", icon: FaSmile, color: "#ffd4e8" },
    { id: 5, text: "You're my queen forever", icon: FaCrown, color: "#ffe0f0" },
    { id: 6, text: "You make every day magical", icon: FaMagic, color: "#ffeef8" },
  ];

  const handleCardClick = (id) => {
    if (!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id]);
      createHeartConfetti();
    }
  };

  const createHeartConfetti = () => {
    const confettiCount = 20;
    const container = document.querySelector(".love-facts-section");
    
    for (let i = 0; i < confettiCount; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.className = "confetti-heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 0.5 + "s";
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="love-facts-section"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Funny & Cute Love Facts 💖
      </motion.h2>

      <div className="facts-grid">
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(fact.id)}
              className="fact-card glass-card"
              style={{ borderColor: fact.color }}
            >
              <motion.div
                animate={
                  clickedCards.includes(fact.id)
                    ? { scale: [1, 1.5, 1], rotate: [0, 360, 0] }
                    : {}
                }
                transition={{ duration: 0.6 }}
                className="fact-icon"
              >
                <Icon size={40} color={fact.color} />
              </motion.div>
              <p className="fact-text">{fact.text}</p>
              <motion.div
                className="sparkle"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default LoveFacts;

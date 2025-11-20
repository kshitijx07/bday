import { motion } from "framer-motion";

const BackgroundHearts = () => {
  // Simple floating hearts
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 8,
    size: 15 + Math.random() * 25,
  }));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(135deg, #fff5f7 0%, #ffe4e9 50%, #ffd4e0 100%)",
        overflow: "hidden",
      }}
    >
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: heart.left,
            fontSize: `${heart.size}px`,
            pointerEvents: "none",
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundHearts;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const MessageSection = ({ onContinue }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  
  const fullMessage = `Neha…
Happy Birthday, my love.
I don’t even know where to begin, because how do you describe someone who feels like your whole world?

Every time I think about you…
I feel this warmth that I can’t explain.
You are not just a part of my life —
you ARE my life.
My happiness.
My peace.
My reason.
My everything.

Sometimes I sit and think about you,
and my chest literally hurts in the sweetest way…
because I can’t believe I get to love someone like you.
I can’t believe I met someone who is
so pure,
so caring,
so soft,
so precious,
so perfect to me in every single way.

Neha…
I know I don’t say it every day,
but you mean more to me than words will ever be able to explain.
I love how you laugh.
I love how you talk.
I love how you care.
I love how you understand me without me even speaking.
I love everything about you…
even the small things that you probably don’t even notice.

When I call you “mine,”
I say it with a heart full of love,
full of pride,
full of gratitude.
Because you are the kind of girl
people pray for…
and somehow
you chose me.

I want today to remind you of one thing —
you are unbelievably important to me.
Not for a moment,
not for a phase,
not temporarily…
but forever.

Your presence in my life is the most beautiful blessing I’ve ever received.
You make me want to be better.
You make me feel safe.
You make me feel loved.
You make me feel complete.
And I fall for you a little more every single day.

So today, on your special day…
I just want to tell you again:
I love you. In ways I can’t explain.
In depths I can’t measure.
In a lifetime I can’t outgrow.

Happy Birthday, Neha.
My girl.
My angel.
My heart.
My forever. 💖`;

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

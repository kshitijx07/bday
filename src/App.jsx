import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundHearts from "./components/BackgroundHearts";
import WelcomeSection from "./components/WelcomeSection";
import MessageSection from "./components/MessageSection";
import SurpriseVideo from "./components/SurpriseVideo";
import QuizLayer from "./components/QuizLayer";
import CountdownReveal from "./components/CountdownReveal";
import LoveLetterReveal from "./components/LoveLetterReveal";
import "./App.css";

function App() {
  const [currentLayer, setCurrentLayer] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);
  const [nextLayer, setNextLayer] = useState(0);

  // Define quiz questions for each layer
  const quizQuestions = [
    {
      question: "What's the date we first met? 💕",
      answer: "7", // Change this to your actual answer
      hint: "Think about that special day in July... 💝",
      wrongMessage: "Oops! Try again, my love! 💖",
    },
    {
      question: "What's my favorite thing about you? 😍",
      answer: "eyes", // Change this
      hint: "It lights up my whole world... ✨",
      wrongMessage: "Not quite! Think about what makes my heart skip a beat! 💓",
    },
    {
      question: "Where did we have our first date? 🌟",
      answer: "pokket cafe", // Change this
      hint: "Remember that cozy place with amazing oreo shake? ☕",
      wrongMessage: "Hmm, that's not it! Remember our first special moment? 💕",
    },
    {
      question: "Complete this: You are my... 💖",
      answer: "everything", // Change this
      hint: "You mean the world to me... 🌍",
      wrongMessage: "Almost there! Think bigger... you're my whole world! 💝",
    },
  ];

  const handleLayerUnlock = () => {
    // Show countdown before moving to next layer
    setNextLayer(currentLayer + 1);
    setShowCountdown(true);
  };

  const handleCountdownComplete = () => {
    setShowCountdown(false);
    setCurrentLayer(nextLayer);
  };

  // Define what shows at each layer
  const layers = [
    <WelcomeSection key="welcome" onContinue={handleLayerUnlock} />,
    <QuizLayer
      key="quiz1"
      question={quizQuestions[0]}
      onCorrect={handleLayerUnlock}
      layerNumber={1}
    />,
    <CountdownReveal key="countdown1" onContinue={handleLayerUnlock} />,
    <QuizLayer
      key="quiz2"
      question={quizQuestions[1]}
      onCorrect={handleLayerUnlock}
      layerNumber={2}
    />,
    <LoveLetterReveal key="letter" onContinue={handleLayerUnlock} />,
    <QuizLayer
      key="quiz3"
      question={quizQuestions[2]}
      onCorrect={handleLayerUnlock}
      layerNumber={3}
    />,
    <MessageSection key="message" onContinue={handleLayerUnlock} />,
    <QuizLayer
      key="quiz4"
      question={quizQuestions[3]}
      onCorrect={handleLayerUnlock}
      layerNumber={4}
    />,
    <SurpriseVideo key="video" />,
  ];

  return (
    <div className="App">
      <BackgroundHearts />

      <div className="layer-container">
        <AnimatePresence mode="wait">
          {showCountdown ? (
            <CountdownReveal 
              key="countdown" 
              onContinue={handleCountdownComplete}
              autoStart={true}
            />
          ) : (
            <motion.div
              key={currentLayer}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {layers[currentLayer]}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        {!showCountdown && (
          <div className="progress-indicator">
            <p className="progress-text">
              Layer {currentLayer + 1} of {layers.length}
            </p>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${((currentLayer + 1) / layers.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>Made with 💖 for the most amazing person in the world</p>
        <p className="footer-date">Birthday 2024</p>
      </footer>
    </div>
  );
}

export default App;

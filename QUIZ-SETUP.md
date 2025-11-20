# 🎮 Quiz Layer Setup Guide

## 🎯 How It Works

Your birthday website now has an **interactive treasure hunt** experience!

She has to answer questions correctly to unlock each layer:
1. **Welcome Screen** → First layer (no quiz)
2. **Quiz 1** → Unlock to see Photos
3. **Photos** → Shown after correct answer
4. **Quiz 2** → Unlock to see Love Facts
5. **Love Facts** → Shown after correct answer
6. **Quiz 3** → Unlock to see Message
7. **Message** → Shown after correct answer
8. **Quiz 4** → Unlock next quiz
9. **Quiz 5** → Final quiz before video
10. **Video** → Final surprise! 🎉

---

## ✏️ Customize Your Questions

Open `src/App.jsx` and find the `quizQuestions` array (around line 15):

```javascript
const quizQuestions = [
  {
    question: "What's the date we first met? 💕",
    answer: "14",  // ← Change this to your answer
    hint: "Think about that special day in February... 💝",
    wrongMessage: "Oops! Try again, my love! 💖",
  },
  // ... more questions
];
```

### Question Format:

```javascript
{
  question: "Your question here? 💕",
  answer: "correct answer",  // Case-insensitive
  hint: "A helpful hint...",
  wrongMessage: "Try again message!",
}
```

---

## 💡 Example Questions

### Romantic Questions:
```javascript
{
  question: "What's my nickname for you? 😍",
  answer: "princess",
  hint: "You're royalty to me... 👑",
  wrongMessage: "Not quite! Think about what I call you! 💕",
}
```

### Memory Questions:
```javascript
{
  question: "Where did I first say 'I love you'? 💖",
  answer: "park",
  hint: "Under the stars, remember? ✨",
  wrongMessage: "Think about that magical evening! 🌙",
}
```

### Fun Questions:
```javascript
{
  question: "What's my favorite thing to do with you? 🎉",
  answer: "cuddle",
  hint: "It involves being close to you... 🤗",
  wrongMessage: "Think cozy! 💝",
}
```

### Inside Jokes:
```javascript
{
  question: "What's our secret code word? 🤫",
  answer: "pineapple",
  hint: "It's a fruit we always laugh about! 🍍",
  wrongMessage: "Remember our silly joke? 😄",
}
```

---

## 🎨 Features

### ✅ Wrong Answer Handling:
- Input field shakes
- Shows custom wrong message
- Can try again unlimited times

### 💡 Hint System:
- Hint button appears after 2 wrong attempts
- Click to show/hide hint
- Helps without giving away answer

### 🎯 Progress Tracking:
- Shows current layer number
- Progress bar at bottom
- Smooth animations between layers

### 📱 Mobile Friendly:
- Touch-friendly inputs
- Responsive design
- Works on all devices

---

## 🔧 Advanced Customization

### Change Number of Layers:

In `App.jsx`, modify the `layers` array:

```javascript
const layers = [
  <WelcomeSection key="welcome" />,
  <QuizLayer key="quiz1" question={quizQuestions[0]} ... />,
  <MomentsSlider key="moments" />,
  // Add or remove layers here
];
```

### Skip Quiz for Testing:

Temporarily set `currentLayer` to skip ahead:

```javascript
const [currentLayer, setCurrentLayer] = useState(0); // Change to 2, 4, etc.
```

### Make Answers Case-Sensitive:

In `QuizLayer.jsx`, line 13, remove `.toLowerCase()`:

```javascript
if (answer.trim() === question.answer) {
```

---

## 🎁 Tips for Great Questions

1. **Make them personal** - Use inside jokes and memories
2. **Not too hard** - She should be able to answer with hints
3. **Romantic** - Keep the mood sweet and loving
4. **Varied difficulty** - Mix easy and challenging questions
5. **Fun hints** - Make hints playful and cute

---

## 🐛 Troubleshooting

**Quiz not showing?**
- Check that `currentLayer` starts at 0
- Make sure questions array has items

**Answer not working?**
- Check spelling in the `answer` field
- Answers are case-insensitive by default
- No extra spaces in answer

**Want to test without answering?**
- Temporarily change `currentLayer` to skip layers
- Or set answer to something easy like "test"

---

## 📊 Current Setup

**Total Layers:** 10
- 1 Welcome
- 5 Quiz layers
- 4 Content layers (Photos, Facts, Message, Video)

**Flow:**
```
Welcome → Quiz → Photos → Quiz → Facts → Quiz → Message → Quiz → Quiz → Video
```

---

## 🎉 Make It Special!

This interactive experience makes the birthday website **10x more exciting**!

She'll love:
- The challenge of unlocking each layer
- Remembering special moments together
- The anticipation building up
- The final video surprise!

---

**Ready to customize? Edit the questions in `src/App.jsx`!** 💖

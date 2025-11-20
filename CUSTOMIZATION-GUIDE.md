# 🎨 Complete Customization Guide

Step-by-step guide to personalize your birthday website.

## 📸 Step 1: Add Your Photos

### Option A: Using Local Images

1. **Add photos to the project**
   - Place your photos in `src/assets/images/` folder
   - Name them: `photo1.jpg`, `photo2.jpg`, etc.

2. **Update MomentsSlider.jsx**

```javascript
// src/components/MomentsSlider.jsx
const moments = [
  {
    id: 1,
    image: "/src/assets/images/photo1.jpg",
    caption: "Our First Date ❤️",
  },
  {
    id: 2,
    image: "/src/assets/images/photo2.jpg",
    caption: "That Beautiful Day 💕",
  },
  // Add more...
];
```

### Option B: Using Online Images

```javascript
const moments = [
  {
    id: 1,
    image: "https://your-image-url.com/photo1.jpg",
    caption: "Our First Date ❤️",
  },
];
```

## 🎬 Step 2: Add Your Birthday Video

### Method 1: Local Video

1. **Add video file**
   - Place your video in `src/assets/` folder
   - Name it `video.mp4`

2. **If using different name**, update `SurpriseVideo.jsx`:

```javascript
// src/components/SurpriseVideo.jsx
<ReactPlayer
  url="/src/assets/your-video-name.mp4"
  controls
  playing
/>
```

### Method 2: YouTube/Vimeo Video

```javascript
<ReactPlayer
  url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  controls
  playing
/>
```

## 💌 Step 3: Customize Your Love Message

Edit `src/components/MessageSection.jsx`:

```javascript
const fullMessage = `My Dearest [Her Name],

[Write your heartfelt message here]

Your message can be as long as you want.
It will animate with a typing effect.

Add multiple paragraphs,
express your feelings,
and make it personal!

Forever yours,
[Your Name] ❤️`;
```

## 💖 Step 4: Customize Love Facts

Edit `src/components/LoveFacts.jsx`:

```javascript
const facts = [
  { 
    id: 1, 
    text: "You are 100% cute", 
    icon: FaHeart, 
    color: "#ff9acb" 
  },
  { 
    id: 2, 
    text: "Your custom fact here", 
    icon: FaStar,  // Choose from: FaHeart, FaStar, FaSmile, FaGem, FaCrown, FaMagic
    color: "#ffb3d9" 
  },
  // Add up to 6 facts (or more if you want)
];
```

### Available Icons:
- `FaHeart` - Heart icon
- `FaStar` - Star icon
- `FaSmile` - Smile icon
- `FaGem` - Gem icon
- `FaCrown` - Crown icon
- `FaMagic` - Magic wand icon

## 🎵 Step 5: Add Background Music

1. **Add music file**
   - Place your music file in `src/assets/` folder
   - Name it `music.mp3`

2. **Update WelcomeSection.jsx**:

```javascript
// src/components/WelcomeSection.jsx
import { useRef } from "react";

const WelcomeSection = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/src/assets/music.mp3');
    audioRef.current.loop = true;
  }, []);

  const toggleMusic = () => {
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  // Rest of component...
};
```

## 🎨 Step 6: Change Colors

### Option A: Quick Color Change

Edit `src/index.css`:

```css
:root {
  --primary-pink: #ff9acb;      /* Change to your preferred pink */
  --light-pink: #ffb3d9;
  --pastel-pink: #ffc4e1;
  --blush-pink: #ffd4e8;
  --soft-pink: #ffe0f0;
  --lightest-pink: #ffeef8;
}
```

### Option B: Different Color Scheme

For a blue theme:
```css
:root {
  --primary-pink: #9ac8ff;
  --light-pink: #b3d9ff;
  --pastel-pink: #c4e1ff;
  --blush-pink: #d4e8ff;
  --soft-pink: #e0f0ff;
  --lightest-pink: #eef8ff;
}
```

For a purple theme:
```css
:root {
  --primary-pink: #c89aff;
  --light-pink: #d9b3ff;
  --pastel-pink: #e1c4ff;
  --blush-pink: #e8d4ff;
  --soft-pink: #f0e0ff;
  --lightest-pink: #f8eeff;
}
```

## 🖼️ Step 7: Change Welcome GIF

Edit `src/components/WelcomeSection.jsx`:

```javascript
<img
  src="https://media.giphy.com/media/YOUR_GIF_ID/giphy.gif"
  alt="Cute gif"
  className="cute-gif"
/>
```

**Find GIFs at:**
- [Giphy.com](https://giphy.com)
- [Tenor.com](https://tenor.com)

**Popular cute GIF searches:**
- "cute cat hearts"
- "bear hug"
- "love animation"
- "cute couple"

## ✨ Step 8: Customize Particle Hearts

Edit `src/components/BackgroundHearts.jsx`:

```javascript
particles: {
  number: {
    value: 30,  // Change number of hearts (10-50 recommended)
  },
  color: {
    value: ["#ff9acb", "#ffb3d9", "#ffc4e1"],  // Change heart colors
  },
  size: {
    value: 20,  // Change heart size (10-30 recommended)
  },
  move: {
    speed: 2,  // Change speed (1-5 recommended)
  },
}
```

## 📝 Step 9: Update Title and Subtitle

Edit `src/components/WelcomeSection.jsx`:

```javascript
<h1 className="title">
  Happy Birthday [Her Name] ❤️
</h1>

<p className="subtitle">
  To the most beautiful person in my world
</p>
```

## 🎯 Step 10: Customize Section Titles

Edit each component file:

**MomentsSlider.jsx:**
```javascript
<h2 className="section-title">
  Our Cute Moments Together 💕
</h2>
```

**LoveFacts.jsx:**
```javascript
<h2 className="section-title">
  Funny & Cute Love Facts 💖
</h2>
```

**MessageSection.jsx:**
```javascript
<h2 className="section-title">
  A Special Message For You 💌
</h2>
```

## 🎬 Step 11: Customize Video Section

Edit `src/components/SurpriseVideo.jsx`:

```javascript
// Change reveal button text
<h2 className="surprise-title">
  Your Surprise ❤️
</h2>

// Change video title
<h3 className="video-title">
  Made With Love Just For You 💕
</h3>

// Change video caption
<p className="video-caption">
  I hope this makes you smile as much as you make me smile every day ❤️
</p>
```

## 🌟 Step 12: Add More Animations

### Bounce Effect on Hover

Add to any component:
```javascript
<motion.div
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
>
  Your content
</motion.div>
```

### Continuous Floating

```javascript
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Your content
</motion.div>
```

### Fade In on Scroll

```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

## 📱 Step 13: Customize Mobile View

Edit `src/App.css` at the bottom:

```css
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;  /* Adjust mobile title size */
  }
  
  /* Add more mobile customizations */
}
```

## 🎨 Step 14: Add Custom Fonts

1. **Choose a font from Google Fonts**
   - Visit [fonts.google.com](https://fonts.google.com)
   - Popular romantic fonts: Pacifico, Dancing Script, Great Vibes

2. **Update src/index.css**:

```css
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body {
  font-family: 'Pacifico', cursive;
}
```

## 🔧 Advanced Customizations

### Add More Sections

Create a new component in `src/components/`:

```javascript
// src/components/NewSection.jsx
import { motion } from "framer-motion";

const NewSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="new-section"
    >
      <h2 className="section-title">Your New Section 💖</h2>
      {/* Your content */}
    </motion.section>
  );
};

export default NewSection;
```

Then add to `App.jsx`:
```javascript
import NewSection from "./components/NewSection";

// In the return statement:
<NewSection />
```

### Change Animation Speed

In any component with Framer Motion:
```javascript
transition={{ duration: 1 }}  // Change to 0.5 for faster, 2 for slower
```

### Add More Floating Hearts

Edit `WelcomeSection.jsx`:
```javascript
{[...Array(10)].map((_, i) => (  // Change 5 to 10 for more hearts
  <motion.div key={i} className="floating-heart">
    ❤️
  </motion.div>
))}
```

## 🎁 Final Touches

### Update Footer

Edit `src/App.jsx`:

```javascript
<footer className="footer">
  <p>Made with 💖 for [Her Name]</p>
  <p className="footer-date">Birthday 2024</p>
</footer>
```

### Add Favicon

1. Create or download a heart icon
2. Replace `public/vite.svg` with your icon
3. Update `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/your-icon.svg" />
```

## 🐛 Testing Your Changes

After each customization:

1. **Save all files**
2. **Check the browser** (it should auto-reload)
3. **Test on mobile view** (browser dev tools)
4. **Fix any errors** in the console

## 💡 Quick Tips

- ✅ Save files frequently
- ✅ Test after each change
- ✅ Keep backups of working versions
- ✅ Use browser dev tools to debug
- ✅ Compress images before adding
- ✅ Keep video files under 50MB
- ✅ Test on actual mobile devices

## 🆘 Need Help?

If something breaks:
1. Check browser console for errors
2. Verify file paths are correct
3. Make sure all imports are correct
4. Try refreshing the page
5. Restart the dev server (`npm run dev`)

---

Happy customizing! Make it special! 💖✨

# 🎀 Birthday Website for My Girlfriend

A beautiful, romantic, and fully responsive React.js birthday website with a cute pink aesthetic, glassmorphism effects, and smooth animations.

## ✨ Features

- 🎨 **Cute Pink Aesthetic**: Soft pink gradients, pastel colors, and romantic vibes
- 💎 **Glassmorphism Design**: Beautiful glass cards with backdrop blur effects
- 💖 **Animated Hearts**: Floating hearts background using tsParticles
- 🎞️ **Photo Carousel**: Swiper slider for your cute moments together
- 💌 **Typing Animation**: Heartfelt message with typewriter effect
- 🎬 **Surprise Video Player**: Heart-shaped reveal button for birthday video
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- ✨ **Smooth Animations**: Framer Motion for beautiful transitions

## 🚀 Quick Start

### Installation

```bash
# Navigate to project directory
cd birthday-website

# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:5173`

## 📂 Project Structure

```
birthday-website/
├── src/
│   ├── components/
│   │   ├── WelcomeSection.jsx      # Welcome screen with hearts
│   │   ├── MomentsSlider.jsx       # Photo carousel
│   │   ├── LoveFacts.jsx           # Cute love facts cards
│   │   ├── MessageSection.jsx      # Typing message animation
│   │   ├── SurpriseVideo.jsx       # Video player reveal
│   │   └── BackgroundHearts.jsx    # Particle hearts background
│   ├── assets/
│   │   ├── images/                 # Your photos go here
│   │   ├── gifs/                   # Cute GIFs
│   │   └── video.mp4               # Birthday video
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Main styles
│   └── index.css                   # Global styles
└── package.json
```

## 🎨 Customization Guide

### 1. Replace Photos in Slider

Edit `src/components/MomentsSlider.jsx`:

```javascript
const moments = [
  {
    id: 1,
    image: "/src/assets/images/photo1.jpg",  // Replace with your photo path
    caption: "Our First Date ❤️",
  },
  // Add more photos...
];
```

### 2. Add Your Birthday Video

1. Place your video file in `src/assets/` folder
2. Name it `video.mp4` OR update the path in `src/components/SurpriseVideo.jsx`:

```javascript
<ReactPlayer
  url="/src/assets/your-video-name.mp4"  // Update this
  controls
  playing
/>
```

### 3. Customize the Love Message

Edit `src/components/MessageSection.jsx`:

```javascript
const fullMessage = `Your custom message here...`;
```

### 4. Change Love Facts

Edit `src/components/LoveFacts.jsx`:

```javascript
const facts = [
  { id: 1, text: "Your custom fact", icon: FaHeart, color: "#ff9acb" },
  // Add more facts...
];
```

### 5. Update Welcome GIF

Edit `src/components/WelcomeSection.jsx`:

```javascript
<img
  src="your-gif-url-or-path"  // Replace this
  alt="Cute gif"
/>
```

### 6. Add Background Music

Edit `src/components/WelcomeSection.jsx`:

```javascript
const toggleMusic = () => {
  const audio = new Audio('/src/assets/music.mp3');
  if (musicPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  setMusicPlaying(!musicPlaying);
};
```

## 🎨 Color Customization

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-pink: #ff9acb;      /* Main pink color */
  --light-pink: #ffb3d9;        /* Light pink */
  --pastel-pink: #ffc4e1;       /* Pastel pink */
  --blush-pink: #ffd4e8;        /* Blush pink */
  --soft-pink: #ffe0f0;         /* Soft pink */
  --lightest-pink: #ffeef8;     /* Lightest pink */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to Netlify
# Or connect your GitHub repo to Netlify for automatic deployments
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/birthday-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 📦 Dependencies

- **react** - UI library
- **framer-motion** - Smooth animations
- **react-tsparticles** - Floating hearts background
- **tsparticles** - Particle engine
- **react-icons** - Beautiful icons
- **swiper** - Touch slider
- **react-player** - Video player
- **vite** - Build tool

## 💡 Tips

1. **Image Optimization**: Compress images before adding them to keep the site fast
2. **Video Format**: Use MP4 format for best compatibility
3. **Mobile Testing**: Test on actual mobile devices for best experience
4. **Performance**: Keep video file size under 50MB for faster loading

## 🎁 Special Features

- ✨ Sparkle effects on hover
- 💖 Heart confetti on card clicks
- 🎭 Smooth fade-in animations on scroll
- 🎨 Glassmorphism with backdrop blur
- 🌟 Neon glow effects on buttons
- 💫 Floating and rotating animations

## 🐛 Troubleshooting

**Issue**: Video not playing
- **Solution**: Make sure video path is correct and file exists

**Issue**: Images not loading
- **Solution**: Check image paths and file extensions

**Issue**: Particles not showing
- **Solution**: Clear browser cache and reload

## 📝 License

This is a personal project made with love ❤️

---

Made with 💖 for the most amazing person in the world

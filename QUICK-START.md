# 🚀 Quick Start Guide

Get your birthday website running in 5 minutes!

## ⚡ Super Quick Setup

```bash
# 1. Navigate to project
cd birthday-website

# 2. Start the development server
npm run dev
```

That's it! Open `http://localhost:5173` in your browser 🎉

## 📝 Essential Customizations (Do These First!)

### 1. Add Your Photos (2 minutes)

**Option A: Quick Test with Online Images**
- The slider already has placeholder images
- Replace URLs in `src/components/MomentsSlider.jsx`

**Option B: Use Your Own Photos**
1. Create folder: `src/assets/images/`
2. Add your photos: `photo1.jpg`, `photo2.jpg`, etc.
3. Update paths in `src/components/MomentsSlider.jsx`:

```javascript
const moments = [
  {
    id: 1,
    image: "/src/assets/images/photo1.jpg",
    caption: "Our First Date ❤️",
  },
  // Add more...
];
```

### 2. Add Your Video (1 minute)

1. Place video in `src/assets/video.mp4`
2. That's it! The component is already configured

**OR use YouTube:**
```javascript
// In src/components/SurpriseVideo.jsx
<ReactPlayer
  url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  controls
  playing
/>
```

### 3. Customize Your Message (2 minutes)

Edit `src/components/MessageSection.jsx`:

```javascript
const fullMessage = `My Dearest [Her Name],

[Your heartfelt birthday message here]

Love,
[Your Name] ❤️`;
```

## 🎨 Optional Customizations

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-pink: #ff9acb;  /* Change this */
}
```

### Update Title
Edit `src/components/WelcomeSection.jsx`:
```javascript
<h1 className="title">
  Happy Birthday [Her Name] ❤️
</h1>
```

### Customize Love Facts
Edit `src/components/LoveFacts.jsx`:
```javascript
const facts = [
  { id: 1, text: "Your custom fact", icon: FaHeart, color: "#ff9acb" },
  // Add more...
];
```

## 🚀 Deploy (5 minutes)

### Easiest: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts and you're live! 🎉

### Alternative: Netlify

```bash
# Build
npm run build

# Drag the 'dist' folder to netlify.com
```

## 📱 Test Before Sharing

1. ✅ Check all photos load
2. ✅ Test video plays
3. ✅ Read through your message
4. ✅ Test on mobile (use browser dev tools)
5. ✅ Click all buttons and cards

## 🎁 Ready to Share!

Once deployed, you'll get a URL like:
- `https://your-site.vercel.app`
- `https://your-site.netlify.app`

Share it with your girlfriend! 💖

## 🆘 Quick Troubleshooting

**Site not loading?**
- Make sure `npm run dev` is running
- Check `http://localhost:5173`

**Images not showing?**
- Check file paths are correct
- Make sure images are in the right folder

**Video not playing?**
- Verify video file exists
- Check file format is MP4
- Try using a YouTube URL instead

**Need more help?**
- Check `README.md` for detailed instructions
- Check `CUSTOMIZATION-GUIDE.md` for all options
- Check browser console for errors (F12)

## 📚 Full Documentation

- `README.md` - Complete project overview
- `CUSTOMIZATION-GUIDE.md` - Detailed customization options
- `DEPLOYMENT.md` - Comprehensive deployment guide

---

**Time to make her smile! 💖✨**

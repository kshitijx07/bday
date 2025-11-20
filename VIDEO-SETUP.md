# 🎬 Video Setup Guide

## Quick Setup

The video player is now working! Currently it shows a YouTube video as a placeholder.

## Option 1: Use YouTube Video (Easiest) ✅

1. Upload your video to YouTube
2. Copy the video URL (e.g., `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`)
3. Open `src/components/SurpriseVideo.jsx`
4. Find line 62: `url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"`
5. Replace with your YouTube URL

**Example:**
```javascript
<ReactPlayer
  url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  controls
  playing
  width="100%"
  height="100%"
/>
```

## Option 2: Use Local Video File

1. Place your video in `src/assets/` folder
2. Name it `video.mp4` (or any name)
3. Update `SurpriseVideo.jsx` line 62:

```javascript
<ReactPlayer
  url="/src/assets/video.mp4"
  controls
  playing
  width="100%"
  height="100%"
  playsinline
/>
```

## Option 3: Use Vimeo

```javascript
<ReactPlayer
  url="https://vimeo.com/YOUR_VIDEO_ID"
  controls
  playing
  width="100%"
  height="100%"
/>
```

## Option 4: Use Google Drive (Public Link)

1. Upload video to Google Drive
2. Right-click → Get link → Set to "Anyone with the link"
3. Copy the file ID from the URL
4. Use this format:

```javascript
<ReactPlayer
  url="https://drive.google.com/file/d/YOUR_FILE_ID/preview"
  controls
  playing
  width="100%"
  height="100%"
/>
```

## Supported Formats

- **YouTube** ✅ (Recommended)
- **Vimeo** ✅
- **MP4** ✅
- **WebM** ✅
- **OGG** ✅
- **Facebook Videos** ✅
- **Twitch** ✅
- **SoundCloud** ✅
- **Streamable** ✅
- **Wistia** ✅
- **DailyMotion** ✅

## Tips

- **YouTube is easiest** - No file size limits, works everywhere
- **Local files** - Keep under 50MB for fast loading
- **Mobile** - YouTube works best on mobile devices
- **Privacy** - Use unlisted YouTube videos for privacy

## Troubleshooting

**Video not playing?**
- Check the URL is correct
- Make sure video is public/unlisted (not private)
- Try using YouTube instead of local file
- Check browser console (F12) for errors

**Video too slow?**
- Compress the video file
- Use YouTube instead
- Reduce video quality

**Mobile issues?**
- YouTube works best on mobile
- Make sure video is not too large
- Check internet connection

---

**Current Status:** ✅ Video player is working with YouTube placeholder
**Next Step:** Replace the YouTube URL with your video!

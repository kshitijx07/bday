# 🚀 Deployment Guide

Complete guide to deploy your birthday website to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] Replace all placeholder images with your actual photos
- [ ] Add your birthday video to `src/assets/video.mp4`
- [ ] Customize the love message in MessageSection.jsx
- [ ] Update love facts in LoveFacts.jsx
- [ ] Test the website locally (`npm run dev`)
- [ ] Build the project (`npm run build`)
- [ ] Test the production build (`npm run preview`)

## 🌐 Vercel Deployment (Recommended - Easiest)

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd birthday-website
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? `birthday-website` (or your choice)
   - Directory? `./`
   - Override settings? `N`

5. **Your site is live!** 🎉
   - You'll get a URL like: `https://birthday-website-xxx.vercel.app`

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

## 🎯 Netlify Deployment

### Method 1: Drag & Drop

1. **Build your project**
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify's deploy zone
4. Your site is live!

### Method 2: Using Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Deploy**
```bash
cd birthday-website
npm run build
netlify deploy --prod
```

4. **Follow prompts**:
   - Create & configure new site? `Y`
   - Team? Select your team
   - Site name? `birthday-website` (or your choice)
   - Publish directory? `dist`

### Method 3: GitHub Integration

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## 📄 GitHub Pages Deployment

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**

Add these lines:
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/birthday-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/birthday-website/'  // Add this line
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: `gh-pages` branch
   - Your site will be live at: `https://YOUR-USERNAME.github.io/birthday-website`

## 🔧 Custom Domain Setup

### For Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## 🎨 Environment Variables (Optional)

If you want to add environment variables:

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables

### Netlify:
1. Go to Site Settings → Environment Variables
2. Add your variables

## 📊 Performance Optimization

Before deploying, optimize your assets:

1. **Compress Images**
   - Use tools like TinyPNG or ImageOptim
   - Recommended: Keep images under 500KB each

2. **Optimize Video**
   - Compress video using HandBrake or similar
   - Recommended: Keep video under 50MB
   - Use H.264 codec for best compatibility

3. **Enable Caching**
   - Both Vercel and Netlify handle this automatically

## 🔒 Privacy Settings

### Make Site Private (Vercel Pro):
1. Go to Project Settings → General
2. Enable "Password Protection"

### Make Site Private (Netlify):
1. Go to Site Settings → Access Control
2. Enable password protection

## 🐛 Common Deployment Issues

### Issue: 404 on refresh
**Solution**: Both Vercel and Netlify handle this automatically for SPAs

### Issue: Images not loading
**Solution**: 
- Check image paths are relative
- Ensure images are in the `public` folder or imported in components

### Issue: Video not playing
**Solution**:
- Verify video format is MP4
- Check video path is correct
- Ensure video file is committed to repository

### Issue: Build fails
**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 Testing Your Deployed Site

1. **Desktop Testing**
   - Chrome, Firefox, Safari, Edge
   - Check all animations work
   - Test video playback

2. **Mobile Testing**
   - Test on actual devices
   - Check touch interactions
   - Verify responsive design

3. **Performance Testing**
   - Use Google PageSpeed Insights
   - Check loading times
   - Optimize if needed

## 🎉 Post-Deployment

1. **Share the link** with your girlfriend! 💖
2. **Monitor analytics** (optional)
3. **Update content** as needed

## 💡 Pro Tips

1. **Use Vercel** for the easiest deployment experience
2. **Enable HTTPS** (automatic on all platforms)
3. **Test on mobile** before sharing
4. **Keep video file size reasonable** for faster loading
5. **Consider adding a custom domain** for a more personal touch

---

Need help? Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

Good luck! 🚀💖

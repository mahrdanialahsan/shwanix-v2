# Background Images Setup Guide

## 📁 Image Files Required

Place the following background images in `/public/Images/` directory:

1. **hero-bg-abstract.webp** - Hero section background
2. **services-bg-abstract.webp** - About Us / Services section background
3. **services-features-bg-abstract.webp** - Services features section background
4. **stats-bg-abstract.webp** - Stats/Metrics section background
5. **ai-future-bg-abstract.webp** - "The Next Horizon" / AI section background
6. **testimonials-bg-abstract.webp** - Testimonials section background
7. **footer-bg-abstract.webp** - Footer background

## 🎨 Image Specifications

### Recommended Settings:
- **Format**: WebP (best) or JPG
- **Resolution**: 1920×1080 or wider (1920×1200 recommended)
- **Compression**: Medium quality (80-85%)
- **Aspect Ratio**: 16:9 or 16:10

## 📝 Image Prompts (Already Provided)

Use the prompts you provided to generate each image with AI tools (Midjourney, DALL·E, Leonardo, Firefly, etc.)

## ✅ Current Implementation

All background images are already integrated with:
- ✅ Proper overlays for text readability
- ✅ Responsive sizing
- ✅ Optimized loading
- ✅ Proper z-index layering

## 🔄 To Replace Images

Simply replace the image files in `/public/Images/` with the same filenames. The code will automatically use the new images.

## 🎯 Overlay Details

- **Hero**: Dark overlay `rgba(15,23,42,0.85)` + blue glow
- **Services**: 30% opacity for subtle effect
- **Stats**: 25% opacity for soft data visualization feel
- **AI Section**: 80% light overlay for readability
- **Testimonials**: 15% opacity for minimal distraction
- **Footer**: 95% white overlay for clean look

## 🚀 Next Steps

1. Generate images using the provided prompts
2. Save them with the exact filenames listed above
3. Place them in `/public/Images/` directory
4. Refresh your browser to see the changes

# Project Plan: CV Timeline (Next.js)

## Theme & Design
The user wants a dynamic timeline style website. The visual theme is driven by the provided logo `logo-nt-creative.png`.
Based on color extraction from the logo, the core palette consists of light pastel pinks and blush tones:
- **Primary Pink**: `#ffc4cb`
- **Accent Pink**: `#fc9faf`
- **Background**: White / Soft Light `#fdfdfd`
- **Text**: Deep gray `#333333` for readability with pastel pinks.
The style will be elegant, vibrant, and highly professional, utilizing Vanilla CSS as per project guidelines to ensure maximum flexibility without generic Tailwind utility classes.

## Tech Stack
- Next.js (App Router, TypeScript)
- Vanilla CSS (Custom properties, CSS modules or global CSS)
- Framer Motion (for smooth scroll animations along the timeline)
- Lucide React (for crisp SVG icons)

## Architecture & Layout
**1. Hero / Header Area**
- Displays user's name: **Trần Thị Như Thảo**
- Role: Content Creator / Video Editor
- An elegant typing effect or fade-in transition.
- Soft pink gradients or glassmorphism background mirroring the logo's aesthetic.

**2. Skills Section**
- Card-based layout demonstrating specific tools: CapCut, Canva Pro, Video Marketing, Logistics Setup.
- Hover effects mimicking button presses or floating elements.

**3. Interactive Timeline (Core Feature)**
A vertical line running down the center of the page. As the user scrolls, points on the line illuminate.
- *DAHNAY LOGISTICS VIET NAM*: 02/2023 - 08/2023
- *CÔNG TY TNHH META*: 09/2023 - 11/2023
- *Công Ty Dịch Vụ Tư Vấn Đào Tạo Phát Triển Logistics Việt Nam*: 06/2024 - 01/2025 (Affiliate & Video Editor)
- *Dự Án Phát Triển Thương Hiệu Cá Nhân*: 03/2025 - Nay (Video Editor & Producer)

**4. Footer & Contact**
- Hobbies: Movies, Music, Manual Coffee, Sound Design.
- Social Links: Zalo, Email, Facebook, TikTok.

## Implementation Steps
1. Bootstrap Next.js application without Tailwind.
2. Setup global CSS variables for the color palette based on `#ffc4cb` and `#fc9faf`.
3. Build the core React components (Hero, Timeline, Footer).
4. Integrate Framer Motion for the scroll-linked animations.
5. Perform responsive design checks to ensure mobile perfection.

# 🧑‍💻 Personal Portfolio — Next.js

A modern personal portfolio built with **Next.js**, **Framer Motion**, and **Tailwind CSS**. Features animated sections, a custom color palette with neon accents, and a glassmorphism card style.

---

## 🚀 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Language | TypeScript |

---

## 📁 Project Structure

```
├── app/
│   └── page.tsx               # Main entry point
├── components/
│   └── About.tsx              # About section component
├── public/
│   └── assets/
│       └── profile.png        # Profile image
├── tailwind.config.ts
└── README.md
```

---

## 🎨 Design System

Custom Tailwind tokens used throughout the project:

| Token | Usage |
|-------|-------|
| `neonOrange` | Accent color, highlights |
| `softGray` | Body text |
| `glass-card` | Glassmorphism card style |
| `neon-border` | Glowing border effect |
| `section-container` | Section layout wrapper |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🖼️ About Section

The `About` component (`components/About.tsx`) features:

- Scroll-triggered entrance animations via `framer-motion` (`whileInView`)
- A profile image with a radial vignette overlay
- A hover glow effect on the image card
- Responsive two-column layout (stacks on mobile)

---

## 📦 Key Dependencies

```bash
npm install framer-motion
```

Tailwind CSS and Next.js are configured out of the box.

---

## 📝 Notes

- Profile image path: `public/assets/profile.png`
- On Windows, use forward slashes in `src` props: `assets/profile.png` (not `assets\profile.png`) to avoid broken paths in the browser.

---

## 📄 License

MIT

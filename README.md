# 🧑‍💻 Personal Portfolio — Next.js

Portfolio personal moderno construido con **Next.js 15**, **UnoCSS** y **Framer Motion**. Incluye secciones animadas, paleta de colores con acentos neon y estilo glassmorphism.

---

## 🚀 Tech Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 15 (App Router) |
| Styling | UnoCSS |
| Animaciones | Framer Motion |
| Lenguaje | TypeScript |

---

## 📁 Estructura del Proyecto

```
v2/
├── app/
│   ├── favicon.ico
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz (fuentes, metadata)
│   └── page.tsx           # Entry point — ensambla todas las secciones
├── components/
│   ├── About.tsx          # Sección "Sobre mí" con imagen de perfil
│   ├── Contact.tsx        # Formulario / links de contacto
│   ├── Hero.tsx           # Sección principal con presentación
│   ├── Interests.tsx      # Intereses y hobbies
│   ├── Navbar.tsx         # Barra de navegación
│   ├── Philosophy.tsx     # Filosofía de trabajo
│   ├── Projects.tsx       # Grilla de proyectos
│   └── TechStack.tsx      # Stack tecnológico
├── public/
│   └── assets/
│       └── profile.png    # Foto de perfil
├── AGENTS.md              # Instrucciones para agentes de IA (Cursor, Copilot, etc.)
├── CLAUDE.md              # Instrucciones para Claude
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── uno.config.ts          # Configuración de UnoCSS (tokens, shortcuts, tema)
```

---

## 🎨 Design System

Los tokens custom están definidos en `uno.config.ts`:

| Token | Uso |
|-------|-----|
| `neonOrange` | Color de acento, highlights |
| `softGray` | Texto del cuerpo |
| `glass-card` | Tarjeta con efecto glassmorphism |
| `neon-border` | Borde con brillo neon |
| `section-container` | Wrapper de layout para secciones |

---

## ⚙️ Instalación y Uso

### Requisitos

- Node.js 18+
- npm / yarn / pnpm

### Instalar y correr

```bash
# Clonar el repo
git clone <repo-url>
cd v2

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

### Build de producción

```bash
npm run build
npm start
```

---

## 📦 Dependencias principales

```bash
npm install framer-motion
npm install -D unocss @unocss/nuxt
```

---

## 🤖 Archivos para agentes de IA

| Archivo | Propósito |
|---------|-----------|
| `CLAUDE.md` | Contexto e instrucciones para Claude |
| `AGENTS.md` | Instrucciones generales para agentes (Cursor, Copilot, etc.) |

Estos archivos documentan convenciones del proyecto, decisiones de arquitectura y guías para que los agentes de IA puedan contribuir de forma consistente.

---

## 📝 Notas

- La imagen de perfil se referencia como `assets/profile.png` (con barra normal, no `\`)
- UnoCSS reemplaza Tailwind — no instalar ambos

---

## 📄 Licencia

MIT
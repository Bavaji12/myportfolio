# Shaik Bavaji — Advanced 3D Developer & QA Portfolio

An interactive, futuristic developer portfolio and QA telemetry dashboard designed for **Shaik Bavaji**, an AI & ML Engineering Student, QA / Software Testing Intern candidate, and Full-Stack Developer.

Built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS v4**, **Three.js / React Three Fiber**, **Framer Motion**, and **Recharts**.

---

## 🌟 Key Features

1. **Cinematic Hero with 3D Profile Hologram**:
   - Built with **React Three Fiber** and **@react-three/drei**.
   - Features multiple rotating neon cyan and violet concentric rings (`OrbitRings.tsx`).
   - Volumetric lighting and floating starry particle field (`ParticleField.tsx`).
   - Dynamic 3D floating technology cards and mouse parallax.
   - Dual avatar support: automatically displays `public/images/profile.png` if provided, with a geometric holographic fallback with initials **SB**.
   - Animated cycling roles (QA / Software Testing Enthusiast, Full-Stack Developer, AI & ML Student, Problem Solver).
   - Instant action buttons: Explore Projects, Download Resume, Contact Me, GitHub, and LinkedIn.

2. **Interactive Developer Overview (Dashboard)**:
   - Futuristic analytics telemetry dashboard.
   - Real-time digital clock showing local browser time, date, and timezone.
   - Verified metric cards: **2 Internships Completed**, **100+ Problems Solved**, **8.2 / 10 CGPA**, and **2 Industry Certifications**.
   - Interactive radar competency chart with **Recharts**.

3. **About — Engineering Quality Through Code**:
   - Comprehensive QA and full-stack philosophy.
   - Highlights: Manual testing, Functional testing, UI testing, API testing (Postman), Test case design, Workflow validation, Edge-case testing, Bug reproduction, Debugging, and Database validation.

4. **Interactive Skills Matrix**:
   - Categorized filter tabs: *Testing*, *Programming*, *Web Development*, *Database & API*, *Tools*, and *Core Concepts*.
   - Instant text search across skill names and descriptions.
   - Animated skill cards with subtle hover glow.

5. **Featured Project Showcase**:
   - **CodeMaster — Full-Stack Online Coding Platform**: Next.js, TypeScript, Express.js, PostgreSQL, Drizzle ORM, with live demo and GitHub repository links.
   - **AI ATS Resume Analyzer**: Python, NLP, AI/ML, semantic matching and skill-gap detection.
   - Interactive 3D tilt cards on desktop, touch-friendly on mobile.
   - "QA Architecture" modal dialog detailing test scope, edge-case coverage, and system architecture.

6. **Signature Quality Assurance Lab**:
   - Deterministic interactive QA simulation sandbox.
   - **5 Scenarios**:
     1. `TC-AUTH-101`: Login form input boundary & auth token validation
     2. `TC-VAL-102`: Empty form submission & boundary field protection
     3. `TC-API-201`: Invalid API request handling (demonstrates **Defect Detection** and formal defect reporting)
     4. `TC-DB-301`: Database record validation & foreign key constraint integrity
     5. `TC-EXEC-401`: Coding submission workflow & infinite loop timeout guard
   - Step-by-step automated test execution with live terminal log console.
   - Formal defect report inspector: Defect ID, Severity, Priority, Environment, Steps to Reproduce, Root Cause Analysis, and Recommended Fix.

7. **Experience & Education Timeline**:
   - Vertical timeline for internships at **KernelIntern Technologies** (Laravel & Livewire) and **Apex Planet Pvt. Limited** (Full-Stack).
   - Academic credentials: **Mohan Babu University** (B.Tech in CSE - AI & ML, CGPA: 8.2/10), **NxtWave CCBP 4.0 Fellow**.
   - Verified certifications: **Oracle Cloud Infrastructure 2025 Certified Generative AI Professional** and **Google Cybersecurity**.
   - Achievements: Open-source contributions via GSoC, GitHub commits, and 100+ algorithmic coding problems solved.

8. **Contact & Transmission Terminal**:
   - Interactive contact cards with 1-click clipboard copy (`bavaji875@gmail.com`).
   - Client-side validated contact form with animated focus states and pre-filled email dispatch fallback.

9. **Accessibility & Global Features**:
   - **Command Palette (Ctrl+K / Cmd+K)** for keyboard navigation across all sections and quick actions.
   - Reading progress bar at top with glowing gradient.
   - Full support for `prefers-reduced-motion` and mobile touch gestures.
   - Responsive across mobile phones, tablets, laptops, and ultra-wide displays.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm or yarn

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```
Generates production assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
public/
  favicon.svg
  resume.pdf                 # Shaik Bavaji's verified resume
  images/
    profile.png              # Optional personal photo (geometric SB fallback active)
src/
  components/
    Button.tsx               # Magnetic hover and glowing button
    CommandPalette.tsx       # Ctrl+K modal quick navigator
    ContactCard.tsx          # Contact info cards with copy button
    Footer.tsx               # Tech footer with back-to-top
    Navbar.tsx               # Glassmorphic sticky header with mobile drawer
    ProjectCard.tsx          # 3D tilt project card with QA modal
    ScrollProgress.tsx       # Top reading progress indicator
    SectionHeading.tsx       # Cybernetic section headings
    SkillCard.tsx            # Categorized skill card
    SocialIcons.tsx          # Pixel-perfect GitHub & LinkedIn SVGs
  data/
    experience.ts            # Internships, education, certifications
    portfolio.ts             # Telemetry stats, focus areas, radar chart data
    projects.ts              # CodeMaster & AI ATS Resume Analyzer
    qualityLab.ts            # 5 QA scenarios, defect reports, simulation steps
    skills.ts                # Categorized testing & development skills
  hooks/
    useActiveSection.ts      # Active section spy
    useReducedMotion.ts      # prefers-reduced-motion listener
  lib/
    animations.ts            # Framer Motion variants
    constants.ts             # Contact details, nav items, bio
    utils.ts                 # Classname merge & time formatters
  sections/
    HeroSection.tsx          # 2-column hero + 3D profile hologram
    DashboardSection.tsx     # Live clock + telemetry overview
    AboutSection.tsx         # QA & development philosophy
    SkillsSection.tsx        # Searchable categorized skills
    ProjectsSection.tsx      # Projects gallery with live demo
    QualityLabSection.tsx    # Interactive QA simulation workbench
    ExperienceSection.tsx    # Vertical internship timeline
    EducationSection.tsx     # Degree, certifications & achievements
    ContactSection.tsx       # Validated dispatch form & info
  styles/
    animations.css           # Glassmorphism, cyber-grid, keyframes
    globals.css
  three/
    FloatingTechCards.tsx    # 3D floating HTML tech cards
    OrbitRings.tsx           # Concentric 3D rotating toruses
    ParticleField.tsx        # 3D starry particle atmosphere
    ProfileScene.tsx         # R3F Canvas scene with avatar hologram
  App.tsx
  main.tsx
  index.css
```

---

## 👤 Author
**Shaik Bavaji**
- **Email**: [bavaji875@gmail.com](mailto:bavaji875@gmail.com)
- **GitHub**: [github.com/Bavaji12](https://github.com/Bavaji12)
- **LinkedIn**: [linkedin.com/in/shaik-bavaji-216121359](https://linkedin.com/in/shaik-bavaji-216121359/)

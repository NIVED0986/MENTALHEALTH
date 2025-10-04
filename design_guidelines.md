# Echo - Mental Wellness Platform Design Guidelines

## Design Approach
**Reference-Based + Custom Gamified Experience**: Drawing inspiration from modern wellness apps with a unique dark glassmorphic aesthetic and gamification elements.

## Core Visual Identity

### Color Palette
**Dark Mode Primary** (entire application in dark mode):
- Background Base: 15 8% 8% (deep charcoal)
- Glass Surfaces: 240 10% 12% (dark slate with transparency)
- Purple Primary: 258 90% 66% (#8b5cf6)
- Pink Accent: 330 81% 60% (#ec4899)
- Blue Accent: 189 94% 43% (#06b6d4)
- Orange Accent: 38 92% 50% (#f59e0b)

**Gradient Combinations**:
- Hero/CTA: Purple to Pink (258 90% 66% → 330 81% 60%)
- Cards: Blue to Purple (189 94% 43% → 258 90% 66%)
- Rewards: Orange to Pink (38 92% 50% → 330 81% 60%)

### Typography
- **Primary Font**: Poppins (headings, buttons, UI elements)
- **Secondary Font**: Inter (body text, descriptions)
- **Sizes**: Hero (text-6xl/text-7xl), Section Headings (text-3xl/text-4xl), Body (text-base/text-lg)
- **Weights**: Bold (700) for headings, Semi-bold (600) for buttons, Regular (400) for body

### Layout System
**Spacing**: Consistent use of Tailwind units 4, 6, 8, 12, 16, 24 (p-4, m-6, gap-8, py-12, etc.)

## Page-Specific Designs

### Index/Landing Page
**Hero Section**:
- Full viewport height (h-screen) background image with dark overlay
- Logo centered top (absolute positioning)
- Large "ECHO - MEET YOUR INNER SELF" text with neon glow effect
- Animated floating particles/glowing elements overlaying the image (reference: Pinterest animated background)
- Login/Signup buttons (top-right, glassmorphic with blur backdrop)

**Content Flow**:
1. About Section: Glass card with purple gradient border, icon grid explaining features
2. Contact Section: Form with glassmorphic input fields, neon focus states
3. All sections have smooth scroll animations and floating glow elements

### Dashboard Layout
**Left Sidebar** (w-20 lg:w-64, fixed):
- Vertical icon stack with labels (on hover/desktop)
- Icons: Chat Bot AI, Mood Tracker, Habit Tracker, Voice Journaling, To-Do List, Exercise
- Active state: Bright gradient background with glow effect
- Hover: Scale + glow animation

**Top Bar**:
- Settings icon (top-right)
- Profile avatar with dropdown (next to settings)
- Glassmorphic background with blur

**Main Dashboard Grid** (responsive):
- **Left-Center**: Mood Graph (lg:col-span-2) - Animated line/bar chart with gradient fills
- **Below Graph**: Calendar showing habit completion (interactive, glowing dates for completed habits)
- **Right Column**: 
  - Pending To-Do List (glass card with checkboxes)
  - Rewards Section (gamification badges/points with sparkle animations)

## Visual Effects & Interactions

### Glassmorphism Implementation
- Backdrop blur: backdrop-blur-xl
- Background: bg-white/10 or bg-slate-800/30
- Border: 1px solid with gradient (from-purple-500/20 to-pink-500/20)
- Shadow: Multiple layers for depth (shadow-2xl + colored glow)

### Animations & Effects
**Buttons**:
- Hover: Scale (1.05) + glow shadow in gradient colors
- Active: Scale (0.98) + intensified glow
- Smooth transitions (transition-all duration-300)

**Cards**:
- Hover: Lift effect (translate-y-[-4px]) + enhanced glow
- Border glow pulse on interaction
- Gradient border animation on hover

**Background**:
- Animated floating particles (slow movement, opacity variations)
- Gradient mesh background with subtle animation
- Glowing orbs that move across the viewport

### Component Library

**Buttons**:
- Primary: Gradient fill (purple-to-pink) + white text + shadow-glow
- Secondary: Glass border + gradient text + hover glow
- Icon Buttons: Circular glass with neon icon colors

**Input Fields**:
- Glass background with subtle border
- Focus: Bright gradient border + glow effect
- Placeholder: Low opacity white text

**Cards**:
- Glass background with gradient borders
- Padding: p-6 to p-8
- Rounded corners: rounded-2xl to rounded-3xl
- Multiple shadow layers for depth

**Charts/Graphs**:
- Gradient-filled areas/bars
- Glowing data points
- Smooth animations on load (animate-in)

## Images
**Hero Background Image**: Full-screen (100vw × 100vh) abstract/ethereal image representing inner peace, meditation, or cosmic themes. Should be dark-toned to blend with the theme. Place a dark gradient overlay (from-black/60 to-transparent) for text readability.

## Responsive Behavior
- **Mobile** (< 768px): Single column, collapsible sidebar to bottom nav, stacked dashboard widgets
- **Tablet** (768px-1024px): Sidebar icons only, 2-column dashboard grid
- **Desktop** (> 1024px): Full sidebar with labels, 3-column dashboard grid, all effects visible

## Accessibility Notes
- Maintain WCAG AA contrast ratios despite dark theme (light text on dark backgrounds)
- Glow effects should enhance, not replace, clear visual indicators
- All interactive elements have clear focus states with gradient borders
- Form inputs maintain readability with proper contrast
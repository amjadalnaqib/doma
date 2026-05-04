---
name: Emerald Growth
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#404944'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#25312f'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b4745'
  on-tertiary-container: '#a8b5b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e5e2'
  tertiary-fixed-dim: '#bcc9c6'
  on-tertiary-fixed: '#121e1c'
  on-tertiary-fixed-variant: '#3d4947'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  headline-xl:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-page: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a high-trust corporate recruitment environment. The personality is authoritative yet approachable, focusing on the concepts of "Growth" and "Steadfastness" represented by the green flag. 

The design style follows a **Corporate / Modern** aesthetic with a strong emphasis on **Minimalism**. It utilizes expansive white space to reduce cognitive load for job seekers and recruiters alike. Visual impact is achieved through precise grid alignment and high-contrast emerald accents rather than decorative elements. The interface must feel systematic and reliable, ensuring that the path from job discovery to application is frictionless and professional.

## Colors

The palette is centered on a deep, professional emerald green representing the "Flag" and the maturity of the recruitment sector.

- **Primary (#064E3B):** A deep Emerald used for headers, primary actions, and brand-critical elements. It provides the "heavy" anchor for the professional look.
- **Secondary (#10B981):** A vibrant growth green used for success states, highlights, and secondary interactive elements.
- **Tertiary (#F0FDFA):** A very soft mint-white used for background sections to distinguish content areas without introducing heavy gray tones.
- **Neutral (#1F2937):** A cool charcoal for high-readability text and structural borders.

The background remains predominantly white to maintain a clean, high-end editorial feel.

## Typography

While the tokens reference "Inter/Work Sans" for fallback purposes, the primary implementation uses **IBM Plex Sans Arabic**. This font was chosen for its technical precision and its ability to handle both Arabic and Latin characters with equal gravity.

- **Headlines:** Use Bold weights for major titles. The line height is kept tight to maintain a strong visual block in RTL layouts.
- **Body Text:** Use Regular weights. A generous line height of 1.6 is applied to long-form job descriptions to ensure readability and reduce eye strain.
- **Alignment:** All text must be right-aligned by default. Numerical data (salaries, dates) should use tabular lining if available to maintain vertical rhythm in lists.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop and a fluid model for mobile. 

- **The Grid:** A 12-column grid with a 24px gutter. Content is centered within a 1280px max-width container.
- **RTL Flow:** The layout logic mirrors standard LTR patterns. Navigation starts from the right, and "Next" actions move the user toward the left.
- **Vertical Rhythm:** A 4px baseline shift is used. All component heights and spacing between elements must be multiples of 4 (e.g., 8px, 16px, 24px, 32px).
- **Margins:** Page margins are generous (40px+) to frame the content and emphasize the minimal, premium feel.

## Elevation & Depth

To maintain a "Professional/Minimal" feel, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Low-contrast Outlines**.

- **Surface Levels:** 
  - Level 0: Pure white (#FFFFFF) for the main background.
  - Level 1: Tertiary Mint (#F0FDFA) for sectioning (e.g., sidebar filters or card backgrounds).
- **Shadows:** Only used for interactive floating elements like dropdowns or active modals. Use a very soft, diffused emerald-tinted shadow: `0 10px 25px -5px rgba(6, 78, 59, 0.05)`.
- **Borders:** Use 1px borders in a soft neutral tint to define card boundaries and form fields rather than using shadows for depth.

## Shapes

The shape language is **Soft (Level 1)**. This ensures the UI feels modern and accessible without losing its corporate "edge."

- **Standard Elements:** 4px (0.25rem) radius for buttons, input fields, and checkboxes.
- **Container Elements:** 8px (0.5rem) radius for job cards, profile headers, and modals.
- **Icons:** Use a consistent 1.5px or 2px stroke width. Avoid filled icons unless indicating an "active" state.

## Components

- **Buttons:** 
  - *Primary:* Solid Deep Emerald (#064E3B) with white text. No gradient.
  - *Secondary:* Ghost style with Primary Green border and text.
- **Input Fields:** 
  - Subtle 1px border. On focus, the border thickens to 2px in Primary Green with a soft glow.
  - Labels must be positioned above the field, right-aligned.
- **Job Cards:** 
  - White background with a 1px border. 
  - The "Apply" button should be positioned on the left side of the card (the end of the RTL reading line).
- **Chips/Badges:** 
  - Used for job categories (e.g., "Full Time", "Remote"). 
  - Use Secondary Green (#10B981) at 10% opacity for the background and 100% opacity for the text.
- **Progress Steppers:** 
  - Essential for multi-step applications. Use a horizontal line moving right-to-left, with Emerald circular nodes for completed steps.
- **Data Tables:**
  - Minimalist style with no vertical borders. Use thin horizontal lines to separate candidates or job listings.
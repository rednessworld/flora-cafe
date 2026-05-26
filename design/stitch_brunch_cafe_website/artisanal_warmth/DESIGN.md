---
name: Artisanal Warmth
colors:
  surface: '#fffae4'
  surface-dim: '#dfdac6'
  surface-bright: '#fffae4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f4df'
  surface-container: '#f3eed9'
  surface-container-high: '#ede8d3'
  surface-container-highest: '#e8e3ce'
  on-surface: '#1d1c0f'
  on-surface-variant: '#3e494a'
  inverse-surface: '#333123'
  inverse-on-surface: '#f6f1dc'
  outline: '#6e797a'
  outline-variant: '#bdc9ca'
  surface-tint: '#006970'
  primary: '#006970'
  on-primary: '#ffffff'
  primary-container: '#3b9ea7'
  on-primary-container: '#002f33'
  inverse-primary: '#77d5de'
  secondary: '#765a00'
  on-secondary: '#ffffff'
  secondary-container: '#fdc400'
  on-secondary-container: '#6c5200'
  tertiary: '#00666e'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e8089'
  on-tertiary-container: '#f5feff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#94f1fb'
  primary-fixed-dim: '#77d5de'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f55'
  secondary-fixed: '#ffdf96'
  secondary-fixed-dim: '#f6bf00'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#594400'
  tertiary-fixed: '#9bf0fa'
  tertiary-fixed-dim: '#7ed4dd'
  on-tertiary-fixed: '#002023'
  on-tertiary-fixed-variant: '#004f55'
  background: '#fffae4'
  on-background: '#1d1c0f'
  surface-variant: '#e8e3ce'
  canvas: '#FFFFFF'
  deep-teal: '#2A6E75'
  warm-sand: '#EFEAD5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is crafted for a premium brunch experience that balances traditional artisanal craftsmanship with a sophisticated, modern aesthetic. The brand personality is welcoming and sun-drenched, evoking the tactile quality of a slow morning at a Mediterranean café. 

The design style follows a **Modern / Editorial** approach with subtle **Minimalist** influences. It prioritizes high-quality negative space, elegant type scales, and a warm color story to ensure the photography of the food and space remains the focal point. The interface should feel "quietly luxurious"—confident enough to be simple, yet detailed enough to feel intentional and curated.

## Colors

The palette is anchored by a sophisticated Teal (`#3B9EA7`) and its lighter counterpart, which provide a cool, professional depth. This is balanced by a vibrant, sun-soaked Goldenrod (`#FFC600`) used sparingly for high-impact accents and calls to action. 

The neutral foundation is a warm, creamy Sand (`#EFEAD5`), which replaces standard grays to maintain an inviting and organic atmosphere. Pure white is used for primary content backgrounds to keep the interface feeling airy and clean. Avoid using pure black; instead, use a deep tint of the primary teal for text to maintain harmony within the warm-toned environment.

## Typography

The typography system relies on a high-contrast pairing: **Playfair Display** for headlines and **Be Vietnam Pro** for functional text. Playfair Display provides a literary, sophisticated flair that mirrors the "Magilio" influence from the reference style, while Be Vietnam Pro offers a friendly, contemporary, and highly readable experience for menus and descriptions.

Use the `display` and `headline` tiers to create a strong editorial rhythm. `Label` styles should be used for metadata, menu categories, and overlines, often paired with a slight letter-spacing increase and uppercase styling to denote hierarchy without increasing font size.

## Layout & Spacing

The layout philosophy uses a **Fixed Grid** for large screens to maintain an editorial, magazine-like feel, and a fluid system for smaller devices. A 12-column grid is standard for desktop, transitioning to 4 columns for mobile.

Spacing follows an 8px base unit. To emphasize the premium nature of the brand, utilize generous vertical padding between sections (80px to 120px on desktop) to allow the content and imagery to "breathe." Content should be centered with significant outer margins on large displays to prevent the line lengths of the menu descriptions from becoming too wide and difficult to read.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-contrast Outlines** rather than aggressive shadows. Depth is achieved by placing elements on surfaces of varying warmth (e.g., a white card on a `#EFEAD5` background).

Where elevation is required for interactivity (like a floating navigation bar or a hovered card), use extremely soft, large-radius ambient shadows tinted with the primary teal color at very low opacity (e.g., 5-8%). This prevents the UI from feeling "heavy" or overly digital, keeping it grounded in a natural, tactile world.

## Shapes

The shape language is **Rounded**, utilizing a 0.5rem (8px) base radius. This softening of edges communicates the "inviting" and "warm" brand personality. 

For specific artisanal elements—such as featured dish images or profile avatars—consider using a "squircle" or a slightly more organic, irregular rounded shape to emphasize the non-industrial, handmade nature of the food. Buttons and input fields should remain consistent at the `rounded-lg` level for a modern, professional look.

## Components

### Buttons
Primary buttons use the Secondary Goldenrod (`#FFC600`) with deep teal text for maximum visibility. Secondary buttons should use the Primary Teal with white text. Outline buttons use a 1px border of the Primary Teal and are reserved for less critical actions like "View Gallery."

### Cards
Cards are essential for menu items and event features. Use a white background with a subtle 1px border in a darkened version of the Sand color (`#D6CEB0`). Padding within cards should be generous (24px - 32px) to maintain the minimalist aesthetic.

### Input Fields & Controls
Inputs use a warm-white background with a soft teal border on focus. Checkboxes and radio buttons use the secondary color for the "checked" state to provide a cheerful pop of color.

### Menu Lists
For the brunch menu, use a classic editorial layout: Dish names in `headline-md`, descriptions in `body-md`, and prices positioned to the right or immediately following the title. Use thin horizontal dividers in the neutral Sand color to separate items without creating visual clutter.

### Additional Components
- **Floating Reservation Bar:** A persistent, thin bar at the bottom of mobile screens in the Primary Teal for quick booking.
- **Image Carousels:** Softly rounded corners on all images with minimal navigation arrows to prioritize the photography.
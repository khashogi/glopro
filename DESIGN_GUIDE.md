# Oasis Wash - Design Guide

## 🎨 Brand Colors

### Primary Colors

**Coral (Primary)**
- Default: `#FF5A5F`
- Dark: `#E6484D` (hover states)
- Light: `#FF787C` (backgrounds)
- Usage: CTAs, links, active states, badges

**Teal (Secondary)**
- Default: `#008489`
- Dark: `#006B6F` (hover states)
- Light: `#00A3A8` (backgrounds)
- Usage: Accents, icons, success states, highlights

### Neutral Colors

**Text Colors**
- Primary Text: `#484848` (body text, headings)
- Secondary Text: `#767676` (labels, meta info)
- Background: `#F7F7F7` (page background)
- White: `#FFFFFF` (cards, modals)

**Utility Colors**
- Error Red: `#C13515`
- Success Green: `#00A699`
- Warning Orange: `#FF9800`

---

## 🔤 Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes
- **H1**: 32px mobile, 40px desktop (2rem / 2.5rem)
- **H2**: 24px mobile, 32px desktop (1.5rem / 2rem)
- **H3**: 20px mobile, 24px desktop (1.25rem / 1.5rem)
- **Body**: 16px (1rem)
- **Small**: 14px (0.875rem)
- **Tiny**: 12px (0.75rem)

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## 📐 Spacing System

Based on 8px grid:

```
4px  = 0.25rem = space-1
8px  = 0.5rem  = space-2
12px = 0.75rem = space-3
16px = 1rem    = space-4
24px = 1.5rem  = space-6
32px = 2rem    = space-8
48px = 3rem    = space-12
64px = 4rem    = space-16
```

**Common Uses:**
- Card padding: 24px (space-6)
- Section padding: 32px mobile, 48px desktop
- Element gap: 16px (space-4)

---

## 🎯 Border Radius

- **Cards**: 12px (`rounded-card`)
- **Buttons/Inputs**: 8px (`rounded-button`)
- **Badges**: 9999px (`rounded-full`)
- **Images**: 8px (standard)

---

## 🌟 Shadows

**Card Shadow**
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
```

**Card Hover**
```css
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
```

**Button Shadow** (subtle)
```css
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
```

---

## 🔘 Button Styles

### Primary Button
```
Background: #FF5A5F (coral)
Text: White
Padding: 12px 24px
Border Radius: 8px
Font Weight: 500
Hover: Background darkens to #E6484D
Active: Scale 0.98
```

### Secondary Button
```
Background: White
Text: #FF5A5F (coral)
Border: 2px solid #FF5A5F
Padding: 12px 24px
Border Radius: 8px
Font Weight: 500
Hover: Background #FF5A5F, Text White
Active: Scale 0.98
```

### Tertiary Button
```
Background: Transparent
Text: #FF5A5F (coral)
Font Weight: 500
Underline
Hover: Text darkens to #E6484D
```

---

## 📦 Card Styles

**Standard Card**
```
Background: White
Padding: 24px
Border Radius: 12px
Shadow: 0 2px 8px rgba(0,0,0,0.12)
Hover: Shadow increases
Transition: 200ms
```

**Highlighted Card** (Popular, Featured)
```
Same as standard +
Border: 2px solid #FF5A5F
Ring: 4px ring-coral/10
Badge: Absolute positioned, -top-4
```

---

## 📱 Responsive Breakpoints

```
Mobile:  320px - 767px   (default)
Tablet:  768px - 1023px  (md:)
Desktop: 1024px - 1279px (lg:)
Large:   1280px+         (xl:)
```

**Mobile Navigation:**
- Hamburger menu below 768px
- Bottom navigation for key actions
- Collapsed sections
- Single column layouts

**Desktop Navigation:**
- Horizontal menu bar
- Multi-column layouts
- Expanded content

---

## 🎨 Component Patterns

### Progress Bar
```
Background: Gray-200
Fill: Coral or Teal
Height: 8px
Border Radius: 9999px (fully rounded)
Transition: 500ms ease
```

### Badge
```
Background: coral/10 or teal/10
Text: Coral or Teal
Padding: 4px 12px
Border Radius: 9999px
Font Size: 12px
Font Weight: 600
```

### Input Field
```
Border: 1px solid gray-300
Padding: 12px 16px
Border Radius: 8px
Focus: 2px ring coral
Transition: 200ms
```

### Notification Banner
```
Background: orange-50
Border-left: 4px solid orange-400
Padding: 16px
Border Radius: 8px
Icon: Orange-400
```

---

## 🌈 Gradient Examples

**Hero Gradient**
```css
background: linear-gradient(
  135deg, 
  rgba(255, 90, 95, 0.1),  /* coral/10 */
  rgba(0, 132, 137, 0.05), /* teal/5 */
  rgba(247, 247, 247, 1)   /* background */
);
```

**CTA Gradient**
```css
background: linear-gradient(
  135deg,
  #FF5A5F,  /* coral */
  #008489   /* teal */
);
```

**Card Accent Gradient**
```css
background: linear-gradient(
  135deg,
  rgba(255, 90, 95, 0.05),
  rgba(0, 132, 137, 0.05)
);
```

---

## ✨ Animations

### Hover Effects
```css
/* Scale up slightly */
transition: all 200ms ease;
hover: scale(1.02);

/* Button press */
active: scale(0.98);
```

### Fade In
```css
opacity: 0;
animation: fadeIn 300ms ease forwards;
```

### Slide Up
```css
transform: translateY(20px);
opacity: 0;
animation: slideUp 400ms ease forwards;
```

---

## 📐 Layout Grid

**Container Max Width**
```
max-width: 1280px (7xl)
padding: 16px mobile, 24px desktop
margin: 0 auto
```

**Grid Systems**
```
2 columns mobile  (grid-cols-1 md:grid-cols-2)
3 columns tablet  (md:grid-cols-3)
4 columns desktop (lg:grid-cols-4)
```

**Gap Spacing**
```
Small: 16px (gap-4)
Medium: 24px (gap-6)
Large: 32px (gap-8)
```

---

## 🎯 Accessibility

### Color Contrast
- Body text (#484848) on white: 8.59:1 ✅ AAA
- Secondary text (#767676) on white: 4.54:1 ✅ AA
- Coral (#FF5A5F) on white: 3.94:1 ✅ AA Large Text

### Focus States
- 2px solid ring in coral color
- Visible on keyboard navigation
- Consistent across all interactive elements

### Tap Targets
- Minimum 44x44px for mobile
- Adequate spacing between clickable elements
- Visual feedback on touch

---

## 💡 Design Principles

1. **Clarity Over Cleverness** - Clear hierarchy, obvious actions
2. **Breathing Room** - Generous white space between elements
3. **Consistency** - Same patterns repeated throughout
4. **Mobile First** - Designed for small screens, enhanced for large
5. **Speed** - Fast loading, instant feedback, smooth transitions
6. **Trust** - Transparent pricing, clear expectations, professional polish

---

## 🔧 Tailwind Classes (Common Patterns)

### Buttons
```
btn-primary:     bg-coral text-white px-6 py-3 rounded-button
btn-secondary:   bg-white text-coral border-2 border-coral
btn-tertiary:    text-coral underline
```

### Cards
```
card:            bg-white rounded-card shadow-card p-6
card-hover:      hover:shadow-card-hover
```

### Text
```
text-neutral:       #484848
text-neutral-light: #767676
```

### Spacing
```
section-padding:    py-20
card-gap:           gap-8
element-gap:        gap-4
```

---

## 📱 Component Examples

### Service Card
```tsx
<div className="card">
  <div className="text-6xl mb-4">💎</div>
  <h3 className="text-2xl font-semibold mb-2">Premium Detail</h3>
  <p className="text-neutral-light mb-4">Description</p>
  <div className="flex justify-between mb-4">
    <span className="text-3xl font-bold">AED 350</span>
    <span className="text-sm text-neutral-light">2 hours</span>
  </div>
  <button className="btn-primary w-full">Book Now</button>
</div>
```

### Alert Banner
```tsx
<div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-button">
  <div className="flex items-start space-x-3">
    <FiAlertCircle className="text-orange-400 mt-0.5" />
    <div>
      <p className="font-semibold text-neutral text-sm">Sandstorm Warning</p>
      <p className="text-sm text-neutral-light">Message here</p>
    </div>
  </div>
</div>
```

---

## 🎨 Brand Voice

**Tone:**
- Professional but friendly
- Knowledgeable without being technical
- Confident in quality
- Understanding of local challenges (desert, heat)

**Writing Style:**
- Clear, concise sentences
- Active voice
- Benefit-focused
- Conversational but not casual

**Examples:**
✅ "We come to you" (not "Our service is mobile-based")
✅ "Earn points on every wash" (not "Loyalty program available")
✅ "Built for Abu Dhabi" (not "Designed for Middle East markets")

---

This design system ensures consistency across the entire application and provides clear guidelines for future development.

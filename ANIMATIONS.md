# Animaties & Design Inspiratie

Dit document beschrijft de animaties en design elementen die zijn geïmplementeerd in de Leren Timer, geïnspireerd door moderne UI/UX libraries.

## 🎨 Design Systeem

### Kleuren
- **Primaire Gradient**: `#667eea` → `#764ba2` (paars/blauw gradient)
- **Waarschuwing**: `#fa5252` → `#e03131` (rood gradient voor laatste minuut)
- **Achtergrond**: Wit met glasmorphism effect
- **Tekst**: Gradient fill voor timer cijfers

### Typografie
- **Font**: System font stack voor optimale prestaties
- **Timer Display**: 48px bold met letter-spacing
- **Knoppen**: 14px semi-bold

## ✨ Geïmplementeerde Animaties

### 1. Entrance Animation (Slide & Fade)
```css
Inspiratie: reactbits.dev
- Fade in van 0 naar 1 opacity
- Slide down van -20px naar 0
- Cubic bezier easing voor vloeiende beweging
```

### 2. Pulse Glow (Tijdens Countdown)
```css
Inspiratie: uiverse.io
- Cirkel gloeit met variërende shadow
- 2 seconden infinite loop
- Drop shadow van 8px naar 16px
```

### 3. Button Ripple Effect
```css
Inspiratie: Material Design / uiverse.io
- Ripple effect bij klikken
- Witte cirkel die uitbreidt
- 600ms transition
```

### 4. Confetti Celebration
```javascript
Inspiratie: reactbits.dev
- 50 confetti elementen
- Random kleuren uit gradient palet
- Vrije val met rotatie animatie
- 4 seconden duration
```

### 5. Completion Bounce
```css
Inspiratie: uiverse.io button animations
- Bounce effect bij voltooiing
- Scale van 1 → 1.1 → 0.95 → 1.05 → 1
- Cubic bezier easing voor elastisch gevoel
```

### 6. Warning State (Laatste Minuut)
```css
Inspiratie: reactbits.dev alert animations
- Shake animatie (horizontaal)
- Rood pulserende glow
- Color change naar rood gradient
- 1 seconde infinite pulse
```

### 7. Hover & Focus States
```css
Inspiratie: Modern UI libraries
- Lift effect (translateY -2px)
- Shadow intensiteit increase
- Smooth 0.2s transitions
```

### 8. Progress Circle Animation
```css
Inspiratie: SVG animation best practices
- Stroke-dashoffset animatie
- Smooth circular countdown
- Gradient stroke met filter effects
```

## 🎯 Glassmorphism Effect

```css
Inspiratie: Modern UI trends (iOS, Windows 11)
- Semi-transparante achtergrond
- Backdrop blur (10px)
- Subtiele border
- Layered shadows
```

## 🎨 Gradient Combinations

### Primaire Gradient (Timer)
- Start: `#667eea` (Indigo)
- End: `#764ba2` (Purple)

### Confetti Kleuren
- `#667eea` (Indigo)
- `#764ba2` (Purple)  
- `#f093fb` (Pink)
- `#4facfe` (Sky Blue)
- `#43e97b` (Green)

## 🔄 Transition Timing

- **Fast**: 0.2s - Hover states, button clicks
- **Medium**: 0.3s - State changes, UI updates
- **Slow**: 0.4s - Entrance animations, modal transitions
- **Custom**: 0.6s - Ripple effect, special animations

## 📐 Layout & Spacing

- **Border Radius**: 
  - Cards: 24px
  - Buttons: 12px  
  - Close button: 50% (circle)
- **Padding**: 24px standard card padding
- **Gaps**: 12px tussen buttons
- **Margins**: 20px tussen secties

## 🎭 Easing Functions

- **Entrance**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Bounce back
- **Exit**: `cubic-bezier(0.4, 0.0, 0.2, 1)` - Smooth deceleration
- **Hover**: `ease` - Standard smooth
- **Warning**: `ease-in-out` - Symmetrisch pulse

## ♿ Accessibility

- **Reduced Motion Support**: Alle animaties worden verkort tot 0.01ms voor gebruikers met prefers-reduced-motion
- **Focus Styles**: 3px outline voor keyboard navigatie
- **ARIA Labels**: Voor close button en interactieve elementen

## 🎪 Advanced Effects

### Drop Shadow Filters
- Gebruikt voor glowing circle effect
- RGBA met alpha transparency
- Variërende blur radius

### Transform Combinaties
- Multiple transforms: `translate() + scale() + rotate()`
- Transform-origin aanpassingen voor natuurlijke beweging

### Backdrop Filters
- Modern CSS feature voor blur behind element
- Fallback naar semi-transparent background

## 📚 Referenties

- **reactbits.dev**: Smooth entrance animations, confetti patterns
- **uiverse.io**: Button animations, ripple effects, card designs
- **Material Design**: Elevation system, shadow guidelines
- **iOS Human Interface Guidelines**: Glassmorphism inspiration

---

Alle animaties zijn geoptimaliseerd voor prestaties en gebruiken CSS animations en transitions waar mogelijk, met JavaScript alleen voor complexere interacties zoals confetti en state management.

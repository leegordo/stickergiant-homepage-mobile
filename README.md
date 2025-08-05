# StickerGiant Homepage Mobile

A React component recreated from Figma design showcasing StickerGiant's mobile homepage.

## Features

- **Pixel-perfect** recreation of Figma design
- **Mobile-responsive** (390px width optimized)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Modular components** for easy maintenance

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the source code.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (⚠️ irreversible)

## Project Structure

```
src/
├── StickerGiantHomepage.tsx   # Main component
├── App.tsx                    # App wrapper
├── index.tsx                  # Entry point
└── index.css                  # Global styles with Tailwind

public/
└── index.html                 # HTML template

Configuration files:
├── package.json               # Dependencies & scripts
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind config
└── postcss.config.js         # PostCSS config
```

## Components Overview

### Main Components
- **StickerGiantHomepage** - Main container component
- **Navigation** - Header with announcement bar, logo, and nav items
- **HeroSection** - Hero image with headlines and CTAs
- **ProductAdvantages** - Three key selling points section

### Utility Components
- **Stars** - Trustpilot rating stars
- **Button** - Reusable button with variants
- **MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon** - Navigation icons

## Customization

### Colors
The component uses Figma's design system colors defined in `tailwind.config.js`:
- Brand Primary: `#bb3526`
- Text Default: `#383839`
- Background: `#ffffff`

### Typography
Uses Google Fonts:
- **Roboto Condensed** - Primary font family
- **Roboto** - Secondary font family

### Responsive Design
Optimized for mobile with max-width of 390px, centered on larger screens.

## Asset Handling

Currently uses localhost URLs from Figma. For production:
1. Replace localhost URLs with your CDN/asset URLs
2. Add proper loading states
3. Implement error handling for failed image loads

## Browser Support

Supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Make changes to components in the `src/` directory
2. Test locally with `npm start`
3. Build for production with `npm build`

## Notes

- Images are currently served from localhost (Figma export)
- Component is fully functional but may need API integration for real functionality
- Tailwind classes match the exact Figma design specifications
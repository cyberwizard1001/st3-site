# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

ST3 (Success Through Training & Transformation) is a React-based educational services website built with Vite and styled-components. The site showcases educational courses and services for different target audiences (school children, college students, corporates).

## Common Commands

### Development
```bash
npm run dev        # Start development server with hot reload
npm run build      # Create production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint to check code quality
```

### Testing and Quality
```bash
npm run lint       # Check for linting errors (currently shows unused vars in LandingPage.jsx)
```

## Architecture Overview

### Technology Stack
- **Frontend Framework**: React 19.1.1 with React DOM
- **Build Tool**: Vite 7.1.2 with HMR (Hot Module Replacement)
- **Routing**: React Router DOM 7.8.2
- **Styling**: styled-components 6.1.19 with CSS-in-JS approach
- **Code Quality**: ESLint 9.35.0 with React hooks and refresh plugins

### Project Structure
```
src/
├── App.jsx              # Main app component with routing and navigation
├── main.jsx             # React application entry point
├── GlobalStyle.jsx      # Global styled-components styles
├── components/
│   └── ContentWrapper.jsx   # Reusable layout wrapper component
└── pages/
    ├── LandingPage.jsx      # Main landing page (primary content)
    ├── Contact.jsx          # Contact form page
    ├── About.jsx           # About page (unused in current routing)
    ├── Home.jsx            # Home page (unused in current routing)
    ├── WhyST3.jsx          # Why ST3 page (unused in current routing)
    ├── Services.jsx        # Services page (unused in current routing)
    └── Courses.jsx         # Courses page (unused in current routing)
```

### Styling Architecture
The project uses a **styled-components** architecture with:

- **GlobalStyle.jsx**: Defines global CSS reset and base styles with green color scheme
- **Component-level styling**: Inline styled-components within each component
- **Color Palette**: Primary green (#179b4a), secondary green (#41c765), dark text (#214734)
- **Typography**: Montserrat font family throughout
- **Responsive Design**: CSS Grid and Flexbox with responsive breakpoints

### Current Routing Setup
The app currently only has two active routes:
- `/` - LandingPage component (contains all main content sections)
- `/contact` - Contact form

Note: Several page components exist but are not currently routed in App.jsx.

## Development Patterns

### Component Patterns
- **Functional Components**: All components use React functional components with hooks
- **Inline Styling**: Heavy use of inline styles within styled-components
- **CSS-in-JS**: No separate CSS files, all styling through styled-components and inline styles
- **Responsive Grid Layouts**: Extensive use of CSS Grid with `repeat(auto-fit, minmax())`

### State Management
- Currently uses only built-in React state (useState)
- No external state management library (Redux, Zustand, etc.)

### Code Organization
- **Single Responsibility**: Each page component handles its own styling and logic
- **Reusable Components**: ContentWrapper for consistent page layout
- **Component Composition**: LandingPage includes multiple sections as inline components

## Known Issues

### Linting Errors (Current)
- `src/pages/LandingPage.jsx` line 389: `'index'` variable defined but never used
- `src/pages/LandingPage.jsx` line 736: `'gradient'` variable defined but never used

### Architecture Considerations
- **Unused Route Components**: Several page components (About, Home, WhyST3, Services, Courses) exist but aren't routed
- **Large Component**: LandingPage.jsx is quite large (800+ lines) and could benefit from section extraction
- **Mixed Styling Approaches**: Combination of styled-components and inline styles creates inconsistency

## Development Guidelines

### Adding New Pages
1. Create component in `src/pages/`
2. Import and add route in `App.jsx`
3. Add navigation link in the Nav component if needed
4. Follow existing styling patterns with styled-components

### Styling Best Practices
- Use the established color palette: primary #179b4a, secondary #41c765
- Maintain consistent spacing and typography using existing patterns
- Use ContentWrapper for consistent page width and margins
- Follow responsive design patterns with CSS Grid/Flexbox

### Component Development
- Keep components functional and use React hooks
- Extract reusable styled-components when patterns repeat
- Use ContentWrapper for page-level layout consistency
- Implement hover states and transitions for interactive elements

### Code Quality
- Run `npm run lint` before committing
- Fix unused variable warnings
- Consider extracting large inline components to separate functions
- Use semantic HTML elements where appropriate

## Build and Deployment

### Production Build
```bash
npm run build     # Generates dist/ folder with optimized assets
npm run preview   # Test production build locally
```

### Build Output
- Vite generates optimized bundles in `dist/` directory
- Includes automatic code splitting and asset optimization
- CSS is extracted and minified automatically

### Development Server
- Runs on `http://localhost:5173` by default
- Features hot module replacement for instant updates
- Proxy configuration can be added to vite.config.js if needed

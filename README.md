# ReacShin

A personal front-end portfolio built to showcase projects, UI craft, and my approach to building responsive web interfaces.

ReacShin uses a bright, minimal visual system with near-black typography, red accents, rounded surfaces, and a contrasting dark preview panel. The interface is designed mobile-first, with dedicated desktop navigation and a mobile bottom navigation bar.

## Features

- Responsive hero section with clear project and about calls to action
- Feature section highlighting a mobile-first, component-driven approach
- Project cards with explicit action links, so clicking the card body does not navigate accidentally
- About, contact, and footer sections
- Mobile bottom navigation with section-aware active states
- Accessible landmarks, visible keyboard-focus styles, and reduced-motion considerations
- Reusable React components and Tailwind utility styling

## Tech stack

- **React** — UI components
- **JavaScript (JSX)** — application code
- **Vite** — local development and production builds
- **Tailwind CSS v4** — styling and responsive utilities
- **Lucide React** — icons

## Getting started

### Requirements

Install a current Node.js LTS release and npm.

### Install dependencies

Open a terminal in the project directory and run:

```powershell
npm install
```

### Start the development server

```powershell
npm run dev
```

Vite will print a local URL in the terminal. Open that URL in your browser.

### Create a production build

```powershell
npm run build
```

The production files are generated in `dist/`. This folder is build output and should not be committed to Git.

### Preview the production build

```powershell
npm run preview
```

If your `package.json` defines a lint script, you can run it with:

```powershell
npm run lint
```

## Project structure

Key application files include:

```text
public/
  assets/
    avatar.png
src/
  components/
    Nav.jsx
    MobileBottomNav.jsx
    Hero.jsx
    HomeSections.jsx
  App.jsx
  index.css
index.html
package.json
package-lock.json
vite.config.js
```

The tree above highlights the main files used by the interface; your repository may contain additional configuration or source files.

## Static assets

Files placed in Vite's `public/` directory are served from the site root. For example, the avatar at `public/assets/avatar.png` is referenced in the browser as:

```html
<img src="/assets/avatar.png" alt="" />
```

Do not put an absolute Windows filesystem path in an HTML `src` attribute.

## Git notes

The repository should track source files, configuration, the lockfile, documentation, and required public assets. Keep generated dependencies, production output, local environment variables, and machine-specific files out of Git. The project `.gitignore` already excludes `node_modules/` and `dist/`.

## Status

The Vite production build completed successfully during local development. The site has not been independently deployed or tested across browsers as part of this README preparation.

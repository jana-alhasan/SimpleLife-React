# Simple Life — React Version

A small React fundamentals project that rebuilds my earlier static [Living the Simple Life](https://github.com/jana-alhasan/Living-the-Simple-Life) page as reusable components.

**Live demo:** https://jana-alhasan.github.io/SimpleLife-React/

## Purpose

This project is intentionally narrow. I used it to practice decomposing a static HTML/CSS layout into a React component tree rather than adding routing, APIs, global state, or backend behavior that the page does not need.

## Verified implementation

- React 18 component composition
- Reusable page sections for the header, navigation, articles, sidebar content, and footer
- Props-based content reuse across smaller components
- Responsive CSS layout and project assets
- A focused render test for the actual page shell

## Structure

The UI lives under `src/component/`, with page sections separated into small components and matching CSS files. `App.js` composes the top-level Header, Main, and Footer.

## Run locally

```bash
npm ci
npm start
```

Run the focused test and production build with:

```bash
npm test -- --watchAll=false
npm run build
```

## Evidence boundary

This is a **training/fundamentals project**, not a full application. It demonstrates React component decomposition and responsive CSS; it does not claim routing, API integration, authentication, state-management libraries, or backend functionality.

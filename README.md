# ARSAAD Smart Systems — React + Vite

A responsive, original corporate website concept inspired by the information architecture of modern SaaS/technology websites.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy

### Vercel
1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Static hosting
Run `npm run build` and upload the contents of `dist/`.

## Customize
- Main page: `src/main.jsx`
- Styling: `src/styles.css`
- Metadata: `index.html`
- Replace the placeholder visual/dashboard sections with your real project images when ready.

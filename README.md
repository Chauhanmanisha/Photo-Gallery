# Celebrare Photo Gallery

A React + Vite + Tailwind CSS photo gallery built to match the prescreening assignment.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Assignment requirements covered
1. React + Vite project, styled only with Tailwind CSS.
2. Fetches 30 photos from `https://picsum.photos/v2/list?limit=30`; displays loading and error states.
3. Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop.
4. Live author-name search using already-fetched photos, without another API request.
5. Favourites managed with `useReducer` and persisted in `localStorage`.
6. Fetching extracted into `useFetchPhotos`, returning `photos`, `loading`, and `error`.
7. `useCallback` used for the search handler and `useMemo` for the filtered photo list.

## Favourite storage
The browser stores favourite photo IDs under `celebrare-photo-gallery-favourites`.

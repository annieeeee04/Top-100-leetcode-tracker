# LeetCode Top 100 — Study Tracker

A dark-mode React app to track your progress through the LeetCode Top 100 Hot problems, organized by category.

![LC Tracker](https://img.shields.io/badge/problems-100-orange) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple)

## Features

- **14 categories** — Array/Hashing, Two Pointers, Sliding Window, Stack, Binary Search, Linked List, Trees, Tries, Heap, Backtracking, Graphs, 1D DP, 2D DP, Greedy & Intervals, Math & Bits
- **Progress tracking** — persisted in `localStorage`, survives page refresh
- **Difficulty filters** — filter by Easy / Medium / Hard within each category
- **Direct LeetCode links** — click any problem title to open it
- **Global progress bar** — see your overall completion at a glance

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Deploy to GitHub Pages

```bash
npm run build
# push the dist/ folder, or use gh-pages:
npx gh-pages -d dist
```

Add `base: '/your-repo-name/'` to `vite.config.js` if deploying to a subdirectory.

## Project Structure

```
src/
├── data/
│   └── problems.js        # All 100 problems with categories, difficulty, tags
├── hooks/
│   └── useProgress.js     # localStorage persistence hook
├── components/
│   ├── Header.jsx          # Top bar with global stats
│   ├── Sidebar.jsx         # Category navigation
│   ├── CategoryGrid.jsx    # Overview card grid
│   └── ProblemTable.jsx    # Per-category problem list
├── App.jsx
├── App.css                 # Global styles + CSS variables
└── main.jsx
```

## Customizing

To add or remove problems, edit `src/data/problems.js`. Each problem needs:

```js
{ num: 1, title: "Two Sum", diff: "Easy", tags: ["hash map"] }
```

## Recommended Study Order

Array/Hashing → Two Pointers → Sliding Window → Stack → Binary Search → Linked List → Trees → Backtracking → Graphs → Heap → 1D DP → 2D DP → Greedy → Tries → Math & Bits

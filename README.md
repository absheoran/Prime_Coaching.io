# Prime Coaching

Mathematics lecture notes and video lessons for Classes 9–12, hosted for free on GitHub Pages.

It is a plain HTML/CSS/JavaScript site, so there is nothing to build or install.

## Folder layout

```
index.html            Home page (hero, class cards, about, contact)
class.html            One page for every class: class.html?c=9, ?c=10, ?c=11, ?c=12
404.html              "Page not found" page
assets/
  js/content.js       ← EDIT THIS to add notes, videos, and contact details
  js/main.js          Page rendering (you normally don't need to touch it)
  css/style.css       All styling (colours are at the top)
  img/logo.svg        Logo and browser-tab icon
notes/
  class-9/ … class-12/   Put your PDF notes here
```

## Adding content

Everything is done in **`assets/js/content.js`**. Every class already lists its NCERT chapters.

**Lecture notes (PDF):** copy the PDF into `notes/class-XX/`, then add it to that chapter:

```js
{ title: "Quadratic Equations",
  notes:  [ { title: "Chapter notes", file: "notes/class-10/quadratic-equations.pdf" } ],
  videos: [] },
```

**Videos:** upload to YouTube (Public or Unlisted) and use the video ID, which is the part after `v=` in the link:

```js
videos: [ { title: "Lecture 1: Introduction", youtube: "dQw4w9WgXcQ" } ]
```

YouTube is recommended for videos. GitHub rejects files over 100 MB and slows down as a repository grows past about 1 GB, and YouTube streaming works better on phones.

**Contact details:** fill in `email`, `phone`, and `youtube` in the `SITE` block at the top of `content.js`.

Tip: use lowercase file names with hyphens and no spaces (`heron-formula.pdf`, not `Heron Formula.pdf`).

## Publishing on GitHub Pages

1. Merge this work into the `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set *Source* to **Deploy from a branch**, then choose `main` and `/ (root)`, and save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

If you want the shorter address `https://<your-username>.github.io/`, name the repository exactly `<your-username>.github.io`.

## Previewing locally

Double-click `index.html`, or run a small server from the repo folder:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

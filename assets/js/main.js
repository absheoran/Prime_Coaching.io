/* Prime Coaching — page rendering. You normally don't need to edit this file;
   add content in assets/js/content.js instead. */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);

  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    for (const c of children) if (c) node.append(c);
    return node;
  }

  function countResources(cls) {
    let notes = 0, videos = 0;
    for (const ch of cls.chapters) {
      notes += (ch.notes || []).length;
      videos += (ch.videos || []).length;
    }
    return { notes, videos };
  }

  /* ---------- shared: nav, footer, contact ---------- */

  function initShared() {
    const toggle = $(".nav-toggle");
    const links = $(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    const contact = $("#contact-list");
    if (contact && typeof SITE !== "undefined") {
      const items = [];
      if (SITE.email) items.push(el("li", {}, el("a", { href: "mailto:" + SITE.email, text: SITE.email })));
      if (SITE.phone) items.push(el("li", { text: SITE.phone }));
      if (SITE.youtube) items.push(el("li", {}, el("a", { href: SITE.youtube, target: "_blank", rel: "noopener", text: "YouTube channel" })));
      if (items.length) contact.replaceChildren(...items);
    }
  }

  /* ---------- home page: class cards ---------- */

  function renderHome() {
    const grid = $("#class-grid");
    if (!grid) return;

    for (const [key, cls] of Object.entries(CLASSES)) {
      const { notes, videos } = countResources(cls);
      grid.append(
        el("a", { class: "class-card", href: "class.html?c=" + key },
          el("span", { class: "class-num", text: key }),
          el("h3", { text: cls.title }),
          el("p", { text: cls.blurb }),
          el("div", { class: "class-meta" },
            el("span", { text: cls.chapters.length + " chapters" }),
            el("span", { text: notes + " notes" }),
            el("span", { text: videos + " videos" })
          )
        )
      );
    }
  }

  /* ---------- class page: chapter list ---------- */

  function videoEmbed(v) {
    const wrap = el("div", { class: "video" });
    const btn = el("button", { class: "video-poster", type: "button", "aria-label": "Play: " + v.title });
    btn.style.backgroundImage = `url(https://i.ytimg.com/vi/${encodeURIComponent(v.youtube)}/hqdefault.jpg)`;
    btn.append(el("span", { class: "play", "aria-hidden": "true", text: "▶" }));
    // Load the real YouTube player only when clicked — keeps the page fast.
    btn.addEventListener("click", () => {
      btn.replaceWith(el("iframe", {
        src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0`,
        title: v.title,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      }));
    });
    wrap.append(btn, el("p", { class: "video-title", text: v.title }));
    return wrap;
  }

  function chapterCard(ch, i) {
    const notes = ch.notes || [];
    const videos = ch.videos || [];
    const empty = !notes.length && !videos.length;

    const summary = el("summary", {},
      el("span", { class: "ch-num", text: String(i + 1).padStart(2, "0") }),
      el("span", { class: "ch-title", text: ch.title }),
      el("span", { class: "ch-badges" },
        empty ? el("span", { class: "badge muted", text: "Coming soon" }) : null,
        notes.length ? el("span", { class: "badge", text: notes.length + " notes" }) : null,
        videos.length ? el("span", { class: "badge", text: videos.length + " videos" }) : null
      )
    );

    const body = el("div", { class: "ch-body" });
    if (empty) {
      body.append(el("p", { class: "muted", text: "Notes and videos for this chapter will be added soon." }));
    }
    if (notes.length) {
      const list = el("ul", { class: "notes-list" });
      for (const n of notes) {
        list.append(el("li", {}, el("a", { href: n.file, target: "_blank", rel: "noopener", text: "📄 " + n.title })));
      }
      body.append(el("h4", { text: "Lecture notes" }), list);
    }
    if (videos.length) {
      const grid = el("div", { class: "video-grid" });
      for (const v of videos) grid.append(videoEmbed(v));
      body.append(el("h4", { text: "Videos" }), grid);
    }

    const details = el("details", { class: "chapter" + (empty ? " is-empty" : "") }, summary, body);
    details.dataset.title = ch.title.toLowerCase();
    return details;
  }

  function renderClass() {
    const list = $("#chapter-list");
    if (!list) return;

    const key = new URLSearchParams(location.search).get("c");
    const cls = CLASSES[key];

    if (!cls) {
      $("#class-title").textContent = "Class not found";
      $("#class-blurb").textContent = "Pick a class from the home page.";
      $(".search") && ($(".search").hidden = true);
      return;
    }

    document.title = `${cls.title} Mathematics · ${SITE.name}`;
    $("#class-title").textContent = cls.title + " Mathematics";
    $("#class-blurb").textContent = cls.blurb;

    // Class switcher tabs
    const tabs = $("#class-tabs");
    for (const k of Object.keys(CLASSES)) {
      const a = el("a", { href: "class.html?c=" + k, text: "Class " + k });
      if (k === key) a.setAttribute("aria-current", "page");
      tabs.append(a);
    }

    cls.chapters.forEach((ch, i) => list.append(chapterCard(ch, i)));

    const search = $("#chapter-search");
    const none = $("#no-results");
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      for (const d of list.children) {
        const match = d.dataset.title.includes(q);
        d.hidden = !match;
        if (match) shown++;
      }
      none.hidden = shown !== 0;
    });
  }

  initShared();
  renderHome();
  renderClass();
})();

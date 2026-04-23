# AppCraft — architektura techniczna

> Stack, struktura plików, CSS design system, JS moduły, plan deploymentu.
> Czytaj gdy edytujesz konkretny plik lub wdrażasz na produkcję.

---

## Stack

HTML5, CSS3, Vanilla JavaScript — bez frameworków, bez bundlera.
Font: Inter (Google Fonts) — ładowany przez `<link>` w każdym HTML, nie przez `@import` w CSS.
Hosting: Vercel (planowany). Domena: `appcraftstudio.pl`.

---

## Struktura plików

```
C:\Users\Admin\Desktop\PROJEKTY\CraftApp\
├── index.html                      ← strona główna: hero + karty + o mnie + kontakt
├── css/
│   └── style.css                   ← cały design system (zmienne, komponenty, responsive)
├── js/
│   └── main.js                     ← nav scroll, hamburger, reveal, flip animacja
├── assets/                         ← zdjęcia, favicon (do uzupełnienia)
├── realizacje/
│   ├── kosmetolozka/index.html     ← „Zamiast segregatora — aplikacja"
│   ├── architekt/index.html        ← „Koniec z Excelem, Drivem i notatnikami"
│   └── medi-dent/index.html        ← „Strona, która pracuje dla właściciela"
└── start/
    └── index.html                  ← landing page dla reklam Meta Ads (noindex)
```

---

## CSS — design system

Wszystko w jednym pliku `css/style.css`. Kolory i tokeny przez CSS custom properties w `:root`:

```css
:root {
  --bg:           #0d0d0f;               /* tło główne */
  --bg-card:      #111115;               /* tło kart */
  --accent:       #7c6af7;               /* fiolet — akcent, CTA, linki */
  --white:        #ffffff;
  --text-primary: #e0e0e0;
  --text-muted:   #666666;
  --text-faint:   #444444;
  --border:       rgba(255,255,255,0.06);
  --font:         'Inter', system-ui, sans-serif;
  --max-width:    1160px;
  --gutter:       48px;                  /* 32px tablet, 20px mobile */
}
```

Nie hardkodować kolorów poza `:root`. Wszystkie wartości przez zmienne.

**Breakpointy:**
- `@media (max-width: 900px)` — tablet: 2 kolumny kart, hamburger menu
- `@media (max-width: 600px)` — mobile: 1 kolumna, pełna szerokość przycisków

**Klasy animacji:**
- `.reveal` — element oczekuje na IntersectionObserver
- `.proj-card` + `.visible` — staggered reveal kart (co 120ms)
- `.nav.scrolled` — nav z backdrop-filter po scrollu (po 40px)

---

## JS — main.js

| Funkcja | Co robi |
|---|---|
| Nav scroll | Dodaje klasę `.scrolled` po 40px — blur + border |
| Hamburger | Toggle `#mobile-menu` + `aria-expanded` |
| Smooth scroll | Anchor linki z offsetem 80px |
| Reveal | IntersectionObserver na `.reveal` (threshold 0.12) |
| Staggered reveal | Observer na `.projects__grid`, karty wchodzą co 120ms |
| Flip animation | Uruchamiana na `.hero__stats` (threshold 0.5) — 14 kroków, 110ms interval |

**Flip animation — szczegół:** Dzieli wartość na cyfry i tekst (np. `48h` → `[4][8][h]`).
Mierzy wysokość przez `getBoundingClientRect()` zanim zmodyfikuje DOM.
Container: `display:flex; align-items:flex-end` dla baseline.

---

## Deployment (plan)

```
1. Repo na GitHub — już zrobione ✅
2. Vercel → Import from GitHub
3. Framework: Other (statyczny HTML)
4. Build command: (puste)
5. Output directory: (puste lub /)
6. Podpiąć domenę appcraftstudio.pl w Vercel → Domains
```

Po podpięciu domeny sprawdzić HTTPS i canonical URL na wszystkich stronach.

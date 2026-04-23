# AppCraft — kontekst dla AI

Pełny kontekst projektu: [`knowledge/CONTEXT.md`](knowledge/CONTEXT.md)

---

## Najważniejsze zasady pracy

**Stack:** HTML/CSS/JS vanilla, bez frameworków. Vercel (planowany). Domena: `appcraftstudio.pl`.

**Zanim napiszesz cokolwiek:**
- Re-read każdy plik tuż przed edycją
- Gdy „kontynuujemy" — zacznij od przeczytania `index.html`

**⚠️ Ścieżki do CSS/JS są relatywne — różne per głębokość pliku:**
```
index.html          → css/style.css        js/main.js
start/index.html    → ../css/style.css     ../js/main.js
realizacje/*/       → ../../css/style.css  ../../js/main.js
```
Błąd w ścieżce = strona bez stylów.

**Słowo „AI" nie pojawia się w treściach** — bariera dla małych firm. Zamiast: „narzędzie", „aplikacja", „system".

**Kolory tylko przez zmienne CSS** z `:root` — nie hardkodować `#7c6af7` ani `#0d0d0f` inline.

**`/start/index.html` ma `noindex`** — przeznaczony wyłącznie dla reklam Meta Ads. Nie linkować z nav.

**Deploy w PowerShell — komendy osobno, nigdy z `&&`.**

---

## Gdzie szukać

| Pytanie | Plik |
|---|---|
| Cel projektu, status, placeholdery do podmiany | `knowledge/CONTEXT.md` |
| Stack, struktura plików, CSS, JS, deployment | `knowledge/ARCHITECTURE.md` |
| Pułapki, ścieżki relatywne, konwencje | `knowledge/PATTERNS.md` |
| Co blokuje deploy, co do zrobienia | `knowledge/OPEN-ITEMS.md` |

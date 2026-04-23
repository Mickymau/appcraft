# AppCraft — kontekst projektu

> Przeczytaj ten plik na początku każdej sesji nad appcraftstudio.pl.
> Więcej szczegółów: `ARCHITECTURE.md` (pliki, CSS, JS), `PATTERNS.md` (pułapki, ścieżki).

---

## Czym jest projekt

**AppCraft Studio** — strona portfolio Michała + landing page dla kampanii Meta Ads.
Buduje markę osobistą jako twórca aplikacji na zamówienie dla małych firm.

Domena: `appcraftstudio.pl` (zarejestrowana, jeszcze niepodpięta)
Email: `hello@appcraftstudio.pl`
Folder lokalny: `C:\Users\Admin\Desktop\PROJEKTY\AppCraft\`

Strona NIE jest one-page — ma osobne podstrony per realizacja.

---

## Status projektu (stan na kwiecień 2026)

**Co gotowe:** strona zbudowana lokalnie w całości — HTML/CSS/JS, landing page `/start/`,
3 podstrony realizacji, animacje, responsywność, SEO meta/OG/JSON-LD, deploy na GitHub.

**Co blokuje deploy na produkcję:**
- `m.me/PLACEHOLDER` — podmienić na prawdziwy link Messenger we wszystkich HTML
- Domena `appcraftstudio.pl` niepodpięta do Vercel
- Brak zdjęcia do sekcji O mnie (`assets/photo.jpg`)
- Brak screenshotów aplikacji na podstronach realizacji
- Brak favicon (`assets/favicon.svg`)
- `© 2025` w stopce — zmienić na 2026

---

## Kluczowe decyzje projektowe

- **Styl:** Obsidian Purple — tło `#0d0d0f`, akcent `#7c6af7` (fiolet), font Inter
- **Logo:** APP\|CRAFT (kreska w kolorze akcentu)
- **Hasło H1:** „Zamiast pięciu subskrypcji — jedno narzędzie."
- **Główny CTA:** Messenger (`m.me/PLACEHOLDER` → podmienić przed deployem)
- **Bez słowa „AI"** w komunikacji do klienta — działa jako bariera dla małych firm
- **Animacje:** fade-up hero, staggered reveal kart, flip statystyk (48h / 3 firmy / 8 lat)
- **Landing page `/start/`** ma `noindex, nofollow` — przeznaczony wyłącznie dla reklam Meta Ads

---

## Dane do podmiany przed deployem

| Placeholder | Co wstawić | Gdzie |
|---|---|---|
| `https://m.me/PLACEHOLDER` | Prawdziwy link Messenger | Wszystkie pliki HTML |
| `[ Twoje zdjęcie ]` | `assets/photo.jpg` | Sekcja O mnie |
| `[ Screenshot aplikacji ]` | Screenshoty per projekt | Podstrony realizacji |
| `assets/favicon.svg` | Prawdziwy favicon | Wszystkie HTML `<head>` |
| `© 2025` | `© 2026` | Stopka |

---

## Gdzie szukać więcej

- Stack, struktura plików, CSS, JS, deployment → `knowledge/ARCHITECTURE.md`
- Pułapki techniczne, ścieżki relatywne, konwencje → `knowledge/PATTERNS.md`
- Co do zrobienia przed deployem i po → `knowledge/OPEN-ITEMS.md`

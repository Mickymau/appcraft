# AppCraft — wzorce, konwencje, pułapki

> Czytaj zanim zaczniesz edytować. Szczególnie sekcja o ścieżkach relatywnych.

---

## Praca z plikami — pułapki

### `edit_file` wymaga dokładnego dopasowania tekstu
Zawsze re-read plik tuż przed edycją. Przy dużych zmianach `write_file` jest bezpieczniejszy.

Gdy użytkownik mówi „kontynuujemy" — pierwsza czynność to przeczytanie `index.html`.

### Google Fonts przez `<link>`, nie `@import`
Font Inter ładowany przez `<link rel="stylesheet">` w `<head>` każdego HTML.
Nigdy przez `@import` w CSS — wolniejsze ładowanie.

---

## ⚠️ Ścieżki do CSS/JS są relatywne — krytyczna pułapka

Pliki na różnych głębokościach mają inne ścieżki. Nie używać ścieżek absolutnych (z `/`).

| Plik HTML | Ścieżka do CSS | Ścieżka do JS |
|---|---|---|
| `index.html` (root) | `css/style.css` | `js/main.js` |
| `start/index.html` | `../css/style.css` | `../js/main.js` |
| `realizacje/*/index.html` | `../../css/style.css` | `../../js/main.js` |

Błąd w ścieżce = strona bez stylów. Zawsze sprawdzaj głębokość pliku zanim wkleisz ścieżkę.

---

## Bez słowa „AI" w komunikacji

Słowo „AI" nie pojawia się w żadnych treściach strony kierowanych do klienta.
Dla małych firm „AI" działa jako bariera — kojarzą z drogim, skomplikowanym, niezrozumiałym.

Zamiast tego: „narzędzie", „aplikacja na zamówienie", „system", „rozwiązanie".

---

## Kolory — tylko przez zmienne CSS

Nie hardkodować `#7c6af7` ani `#0d0d0f` bezpośrednio w komponentach.
Wszystko przez zmienne z `:root` w `style.css`.

Jeśli potrzebujesz nowego koloru — dodaj zmienną w `:root`, nie inline.

---

## Landing page `/start/` — osobne zasady

`start/index.html` ma `<meta name="robots" content="noindex, nofollow">`.
Jest przeznaczony wyłącznie dla ruchu z reklam Meta Ads — nie powinien być indeksowany.

Nie usuwać `noindex` bez powodu. Nie dodawać linku do `/start/` z głównej nawigacji.

---

## Deploy — PowerShell caveat

```powershell
# Komendy OSOBNO — && nie działa w PowerShell
git add .
git commit -m "opis"
git push
```

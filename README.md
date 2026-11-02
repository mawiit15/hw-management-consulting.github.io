# Harald Wieler – HW Management Consultant · Entwurf „Modern“

Statische Webseite (nur HTML, CSS, JavaScript) – ohne Build-Schritt, direkt für GitHub Pages geeignet.

## Ordnerstruktur

```
index.html            Startseite (Start, Leistungen, Über mich, Kontakt)
impressum.html        Impressum
datenschutz.html      Datenschutzerklärung
bildnachweise.html    Bildnachweise
css/
  variables.css       ★ Farben, Schriften, Abstände – hier das Design anpassen
  base.css            Grundlagen (Reset, Typografie, Links)
  layout.css          Kopfbereich, Navigation, Abschnitte, Fußbereich
  components.css      Einzelne Bausteine (Titelbild, Karten, Kontakt, Rechtsseiten …)
js/
  navigation.js       Mobiles Menü, aktiver Menüpunkt, Kopfbereich beim Scrollen
  effects.js          Jahreszahl im Fußbereich, Einblend-Animation
assets/img/           Bilder (für das Web verkleinert)
```

## Häufige Änderungen

| Was?                          | Wo?                                                        |
|-------------------------------|------------------------------------------------------------|
| Texte der Startseite          | `index.html` – Abschnitte sind mit `<!-- ===== … ===== -->` markiert |
| Farben / Schriften            | `css/variables.css`                                        |
| Bild austauschen              | neue Datei in `assets/img/` legen und `src="…"` in der HTML ändern (Bildnachweise aktualisieren!) |
| Menüpunkte                    | `<nav>`-Block – steht in **jeder** HTML-Datei oben          |
| Links im Fußbereich           | `<footer>`-Block – steht in **jeder** HTML-Datei unten      |
| Animation abschalten          | `js/effects.js` → `const REVEAL_SELECTOR = '';`             |

## Lokal ansehen

`index.html` einfach per Doppelklick im Browser öffnen.

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub anlegen.
2. **Inhalt dieses Ordners** (nicht den Ordner selbst) ins Repository hochladen, sodass `index.html` im Hauptverzeichnis liegt.
3. Im Repository: *Settings → Pages → Build and deployment → Source: „Deploy from a branch“*, Branch `main`, Ordner `/ (root)` → *Save*.
4. Nach ca. 1 Minute ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar.

Hinweis: Die Seite lädt keine externen Schriften, Skripte oder Tracker – passend zur Datenschutzerklärung.

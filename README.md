# Kids Solar System

A tiny, tap-and-drag solar system game for preschoolers — built for a
4-year-old to explore day/night, orbits, and seasons without needing to read.

**Play it:** https://bizarre-evms.github.io/kids-solar-system/

## Scenes

| Scene | File | What it teaches |
|---|---|---|
| 🪐 Planets | `planets.html` | Planet order, relative size, and names (spoken aloud) |
| 🌍 Spin | `spin.html` | Day/night from Earth's rotation, plus the Moon's orbit |
| ☀️ Orbit | `orbit.html` | All planets orbiting at true relative speeds; drag one, watch the rest |
| 🍂 Seasons | `seasons.html` | Seasons come from Earth's axial tilt, not distance from the Sun |

## Running locally

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser,
or serve the folder locally:

```
python3 -m http.server
```

Serving over `http://` rather than opening the file directly also gives
better text-to-speech voice quality in Chrome, which restricts its
higher-quality network voices on `file://` pages.

## Structure

- `index.html` — home screen with links to each scene
- `data.js` — canonical planet dataset (size, distance, orbital period, color, moons, facts) shared by every scene
- `ui.js` — shared helpers: text-to-speech, scale-correct pointer/canvas coordinates, responsive canvas sizing
- `assets.js` — shared helper that composites a shaded sphere sprite with each planet's color
- `assets/web/` — CC0 sprite textures from [Kenney's Planets pack](https://kenney.nl/assets/planets)
- `PLAN.md` — what's built and what's next

## Credits

Sphere/texture art: [Kenney.nl](https://kenney.nl) (CC0 1.0 — free for any use).

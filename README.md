# MAGEWA naming standard

A build-free GitHub Pages site for:

> MAGEWA — The Multi-Agent Global Enterprise for Work Automation

The page translates the approved “Definitive Category Grid” direction into an
industrial identity system: governmental typography, drawing-register labels,
blueprint geometry, calibrated grids, layered gradients, grain, and restrained
motion.

The selected figurative mark is proposal 12: six angular inputs converge into a
single execution vector. It intentionally avoids circular and opening-like
forms. The symbol appears as inline SVG, so it stays crisp, color-aware, and
lightweight at every size.

## Files

- `index.html` — complete semantic page and inline vector marks
- `styles.css` — responsive visual system and motion preferences
- `script.js` — copy interaction, current year, and progressive reveal
- `brand-card.html` — compatibility redirect from the previous page
- `.nojekyll` — serves the static files directly on GitHub Pages

The repository’s existing `CNAME` and `SPECS.md` should remain in place. The
site uses relevant product language from the product specification—Context
Packs, agent pipelines, versioned artifacts, provenance, and shareable
previews—without replacing the specification itself.

## Preview locally

No build step or package install is required.

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

Set Pages to deploy from the repository root on the intended branch. Keep the
existing `CNAME` file so the custom domain continues to resolve. All page URLs
are relative, allowing the export to work both at the custom domain and under a
GitHub project path.

## Accessibility

The page includes semantic landmarks, a skip link, keyboard-visible focus,
high-contrast states, an accessible copy status announcement, responsive
layouts, and a reduced-motion mode.

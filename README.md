# MAGEWA company site

A build-free GitHub Pages site for MAGEWA, an AI production workspace that
turns managed client and institutional knowledge into traceable proposals,
decks, wireframes, research, and prototypes.

The commercial narrative is grounded in the repository product specification:
versioned knowledge, Context Packs, bounded agent pipelines, editable artifacts,
evidence, and controlled client previews. The page presents those capabilities
as a coherent platform, a set of repeatable workflows, and an example pilot
engagement for agencies and enterprise teams.

The visual direction remains the approved “Definitive Category Grid”: an
industrial identity system built from governmental typography, drawing-register
labels, blueprint geometry, calibrated grids, layered gradients, grain, and
restrained motion.

The selected figurative mark is proposal 12: six angular inputs converge into a
single execution vector. It intentionally avoids circular and opening-like
forms. The symbol appears as inline SVG, so it stays crisp, color-aware, and
lightweight at every size.

## Files

- `index.html` — complete semantic page and inline vector marks
- `styles.css` — responsive visual system and motion preferences
- `script.js` — current year, progressive reveal, and mobile interaction states
- `brand-card.html` — compatibility redirect from the previous page
- `.nojekyll` — serves the static files directly on GitHub Pages

The repository’s existing `CNAME` and `SPECS.md` should remain in place. The
site expresses the product strategy in customer-facing language without
replacing the specification itself.

## Page structure

- Outcome-led hero and platform promise
- Eight-stage governed production loop
- Six product surfaces across the production chain
- Four representative client-work workflows
- Five implementation services
- Focused one-workflow pilot call to action

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

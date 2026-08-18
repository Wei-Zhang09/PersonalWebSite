# Visual Direction: Liquid Glass Utility Journal

## Surface
**Decide / Learn.** The visitor should first understand Mr Z's product posture, then inspect CleanMaster.

## Reference interpretation
The liquid-glass direction is based on `D:\HermesWorkSpace\novelIDE\ToLiquidGlass.md`. The implementation uses its material, hierarchy, lighting, radius, motion and performance principles rather than treating glass as a generic translucent card style.

## Original system
- Canvas: cool white / grey-blue environment with two soft ambient light fields; the background remains a non-glass Level 0 surface.
- Glass hierarchy: Level 1 for navigation and ordinary content surfaces, Level 2 for the CleanMaster case panel, Level 3 for the active language control and primary CTA. Solid content zones remain to preserve readability.
- Material: low-opacity white surfaces, blur + saturation, top-left inner highlight, low-contrast borders, layered soft shadows, and a left-top unified light source.
- Accent: restrained cobalt blue used for CTAs, active states, links and metadata only.
- Type: system sans for Chinese and general UI; Georgia is permitted only for emphasized English text.
- Radius: 10px controls, 18px cards, 26px content panels, 32px floating surfaces.
- Composition: asymmetric editorial hero, product screenshot as visual anchor, sequential case narrative, method rows and a distinct contact moment.
- Content posture: show real capabilities and a direct download path, but avoid invented adoption, performance, or roadmap claims.
- Motion: short, low-amplitude hover and press transitions only; honor `prefers-reduced-motion`.
- Fallback: `@supports` fallback replaces blur-dependent glass with opaque light surfaces.

## Anti-slop self-audit
The liquid-glass redesign intentionally avoids the common failure mode of applying identical glass to every element. Current risk score: 1/10 — blur is used in several hierarchical surfaces, but it is supported by a real Level 0 background, different material strengths, solid text zones and an opaque fallback. There are no invented metrics, generic feature tiles, neon gradients or icon-topper cards.

# Frontend conventions

## Design direction
An understated engineering portfolio, inspired by the supplied reference. Strong typography and useful project diagrams carry the page; avoid decorative gradients, excessive shadows and ornamental animation. The current layout is an MVP and should stay easy to rearrange.

Use CSS custom properties for colors, spacing, radii and the content width. Use system sans-serif for prose and monospace for short metadata. Body copy is at least 16px. Blue identifies actions and chart data. Borders define project cards; generous whitespace defines larger sections.

## Structure and content
Use a single h1, a heading for each section, and h3 for individual projects. Navigation links target stable section IDs. Prefer native anchors, buttons, details and dialogs over custom controls. Keep content in HTML so the page remains readable without JavaScript. Project links have a native details fallback, progressively enhanced into dialogs.

Keep repeated project structures consistent. New content or complex state may justify extracting components or adopting a framework; do not introduce either speculatively. Personal claims need user-supplied evidence. Example chart values must be identified as illustrative.

## CSS
Use mobile-safe intrinsic layouts, grid and flexbox. Keep breakpoint rules together. Do not use inline styles, arbitrary z-index escalation, fixed card heights or selectors coupled to DOM depth. Aim for readable line lengths, WCAG AA contrast and comfortable touch targets. Respect `prefers-reduced-motion`. Use SVG for simple diagrams with an accessible description; do not add chart dependencies for static illustrations.

## JavaScript
Use modules, descriptive names and small functions. Use event listeners rather than inline handlers. Never inject untrusted HTML. Native browser behavior should remain the default. Dialogs must have a title, a close control, Escape support and restored focus. No fake form submissions, dead buttons or links to invented profiles.

## Definition of done
Run the structural check and production build. Inspect at roughly 390px and 1440px, check no horizontal overflow, and test anchor navigation, all project dialogs, keyboard focus, Escape and reduced motion. Verify asset requests and browser errors when browser tooling is available. Keep deployment credentials out of source and logs.

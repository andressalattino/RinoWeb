# Copilot Instructions for RinosWeb

## Project Overview
- This is a static website for "Rinos Turismo" built with HTML and Tailwind CSS.
- The main entry point is `index.html`. All UI and content are defined here.
- Images are stored in the `img/` directory and referenced directly in the HTML.

## Key Patterns & Conventions
- Use Tailwind CSS utility classes for all layout, spacing, and styling. Do not use custom CSS unless necessary.
- All content and structure changes should be made in `index.html`.
- Images must be placed in the `img/` folder and referenced with relative paths (e.g., `img/SanBernardoDestino.png`).
- Section and card layouts use Tailwind grid and flex utilities. Follow the existing structure for new sections or cards.
- Spanish is the primary language for all content and comments.

## Developer Workflow
- No build step: edit `index.html` and refresh the browser to see changes.
- No JavaScript or frameworks are used; keep all logic and interactivity minimal and inline if needed.
- For new images, add them to `img/` and update the HTML accordingly.

## Examples
- To add a new destination card, duplicate an existing card `<div>` in the relevant grid section and update the image and text.
- To adjust layout spacing, modify Tailwind classes like `gap-6`, `px-4`, or `max-w-[350px]`.
- To change the site style, update Tailwind classes directly in the HTML elements.

## Integration Points
- Tailwind CSS is loaded via CDN in the `<head>` of `index.html`.
- Google Fonts are loaded via CDN as well.

## Special Notes
- Do not introduce JavaScript, build tools, or external dependencies beyond those already present.
- Keep the codebase simple and easy to edit for non-technical users.

## Key Files
- `index.html`: Main site content and structure
- `img/`: All image assets

---
If you add new sections or patterns, document them here for future contributors.

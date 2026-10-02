---
name: frontend
description: Frontend constraints for this project — shadcn components, reuse, restrained visuals, cursor affordances, and light/dark parity. Load before writing or editing any UI code (components, pages, layouts, styles).
---

# Frontend constraints

These are hard rules for any UI work in this repo. Follow them all; do not trade one off against another.

## 1. Use shadcn components

Never hand-roll a primitive that shadcn already provides. Use `Button`, not `<button>`. Same for `Input`, `Label`, `Textarea`, `Form`, and anything else under `@/components/ui`.

- Components live in `components/ui/` and are imported via the `@/components/ui` alias.
- Currently installed: `button`, `form`, `input`, `label`, `slot`, `textarea`.
- If a primitive you need is missing, add it with `npx shadcn@latest add <name>` rather than writing your own.
- Vary appearance through the component's `variant` and `size` props. Do not reimplement a variant with ad-hoc classes.
- Config lives in `components.json`: style `base-nova`, base color `neutral`, CSS variables enabled, icons from `lucide-react`.

## 2. Reuse instead of repeating

If a block of markup shows up more than once, extract it into a shared component.

- Page-local pieces belong in that route's `_components/` folder.
- Anything used by two or more routes moves up into `components/`.
- Repeated data belongs in a typed array that you map over, not in copy-pasted JSX.
- Before writing a new section component, check whether an existing one covers it with a prop.

## 3. Keep the visuals restrained

- No gradient backgrounds, gradient text, or gradient borders. Use flat theme colors.
- Do not stack dividers. Separate sections with spacing, and reach for a border or `Separator` only when a boundary genuinely needs to be visible.
- Prefer whitespace and type hierarchy over decorative chrome.

## 4. Clickable elements get `cursor-pointer`

Anything a user can click or activate must carry `cursor-pointer`: buttons, links, cards that navigate, tabs, icon triggers, custom controls.

Disabled elements are the exception. They get `cursor-not-allowed` and must look inactive.

## 5. Light and dark mode parity

Every design has to read correctly in both themes.

- Use semantic theme tokens: `bg-background`, `text-foreground`, `bg-muted`, `text-muted-foreground`, `border-border`, `bg-card`, `bg-primary`, `text-primary-foreground`.
- Avoid hard-coded colors like `bg-white`, `text-black`, or raw hex values.
- Only reach for a `dark:` override when a token genuinely cannot express the intent.
- Images and overlays need a check in both themes; make sure contrast holds.

## Before you finish

Verify each of these on the code you just wrote:

- Every primitive comes from `@/components/ui`.
- No block of markup is duplicated.
- No gradients, no divider stacking.
- Every interactive element has `cursor-pointer`.
- No hard-coded colors; both themes work.

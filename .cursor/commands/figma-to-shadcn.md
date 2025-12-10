# Command — Recreate Figma screen in code (via Figma MCP + shadcn MCP)

## Overview

Your task is to **recreate a Figma screen pixel-perfect in code** using only official **shadcn/ui** components.
Use the integrated **Figma MCP** to analyze the Figma file structure and retrieve all components, properties, and layout data.
Then, use the **shadcn MCP** to fetch each component’s implementation details (imports, props, examples, and setup instructions).

Never invent or modify components manually — always use the ones retrieved from shadcn MCP.
The result should be a new page in the app named `test1` that perfectly matches the given Figma screen.

---

## Steps

1. **Parse the Figma screen via Figma MCP**

   * Use the provided Figma link (marked with `@https://www.figma.com/...`).
   * Extract the full layer tree, layout data, spacing, typography, and component usage.
   * Identify all shadcn components used on that screen.
   * Map out structure: container hierarchy, sections, and alignment.

2. **Retrieve components via shadcn MCP**

   * For each detected component:

     * Fetch its full code definition, import path, and setup instructions.
     * Retrieve prop types, variant options, and best practices.
   * Make sure all dependencies (e.g., `class-variance-authority`, `lucide-react`) are handled as per shadcn standards.

3. **Recreate the screen in code**

   * Generate a new Next.js page at `app/test1/page.tsx`.
   * Rebuild the layout pixel-for-pixel:

     * Preserve spacing, margins, paddings, typography, and icon placement.
     * Use Tailwind utility classes as in shadcn’s recommended style.
     * Use `lucide-react` icons for all vector icons if applicable.
   * Do not use any custom CSS or invented components.

4. **Validate the result**

   * Ensure all elements match the Figma design in spacing, size, and composition.
   * Verify component usage is identical to the official shadcn/ui structure.
   * Confirm accessibility (ARIA roles, alt text, semantic HTML).

5. **Deliverable**

   * A new file: `app/test1/page.tsx`
   * Optional supporting components (if Figma screen requires nested blocks) placed under `components/test1/`.

---

## Example command usage

```
This is the Figma screen to recreate:
@https://www.figma.com/design/uKbcSoB

It uses only shadcn/ui components.

Follow the “Recreate Figma screen in code (via Figma MCP + shadcn MCP)” command.
```

---

## Checklist

* [ ] Figma MCP used to extract full design structure.
* [ ] All component names retrieved from Figma MCP.
* [ ] shadcn MCP used to fetch implementation details for each component.
* [ ] Page `/test1` created using only official shadcn/ui components.
* [ ] Layout and spacing match the Figma design exactly.
* [ ] Code validated and accessible.

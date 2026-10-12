<h1 align="center">Vela</h1>

<p align="center">
  <a href="https://viteplus.dev"><img src="https://shieldcn.dev/badge/Vite-8b5cf6.svg?logo=vite&logoColor=ffffff" alt="Vite"></a>
  <a href="https://react.dev"><img src="https://shieldcn.dev/badge/React-61dafb.svg?logo=react&logoColor=000000" alt="React"></a>
  <a href="https://www.typescriptlang.org"><img src="https://shieldcn.dev/badge/TypeScript-3178c6.svg?logo=typescript&logoColor=ffffff" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://shieldcn.dev/badge/Tailwind_CSS-38bdf8.svg?logo=tailwindcss&logoColor=ffffff" alt="Tailwind CSS"></a>
  <a href="https://ui.shadcn.com"><img src="https://shieldcn.dev/badge/shadcn%2Fui-000000.svg?logo=shadcnui&logoColor=ffffff" alt="shadcn/ui"></a>
</p>

<p align="center">Play a song and watch the background come alive!</p>

---

## Tech

- **Vite+** unified toolchain (Vite, Rolldown, Vitest, Oxlint, Oxfmt)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** conventions (`components.json`)
- **lucide-react** for icons
- **html2canvas** for custom liquid-glass UI (https://github.com/dashersw/liquid-glass-js)
- **WebGL** for animated background

## Getting started

Vela uses [Vite+](https://viteplus.dev/guide/) (the `vp` CLI). Make sure you have it installed first.

```bash
# install dependencies
vp install

# start the dev server
vp dev
```

Then open the local URL printed in your terminal.

## Commands

| Command      | Description                               |
| ------------ | ----------------------------------------- |
| `vp install` | Install dependencies                      |
| `vp dev`     | Start the dev server with HMR             |
| `vp build`   | Type-check and produce a production build |
| `vp preview` | Preview the production build locally      |
| `vp check`   | Format, lint, and type-check the project  |
| `vp test`    | Run the test suite                        |

> Vite+ separates built-in commands from `package.json` scripts. Use `vp run <name>` to run a project script (for example `vp run build`) if it differs from a built-in.

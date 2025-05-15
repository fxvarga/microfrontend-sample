# 🧩 Microfrontend Federation Playground

Welcome to the **Microfrontend Federation Playground** — a modern monorepo architecture using:

- ⚡ **Vite** for blazing fast builds
- 🎯 **Module Federation** for dynamic remote loading
- 🧱 **pnpm workspaces** for dependency efficiency
- 🎨 **@shared/ui** component library with self-contained styling
- 🔧 **Turborepo** for orchestrating tasks and builds

> Build scalable, isolated, and reusable frontends with minimal setup and maximum dev experience.

---

## 🚀 How to Run the Full System

```bash
pnpm install            # Install all dependencies across the workspace
pnpm build              # Build shared-ui and both remotes
pnpm start              # Starts:
                        # → mf-remote-card1 (vite preview on port 3001)
                        # → mf-remote-card2 (vite preview on port 3002)
                        # → mf-host (vite dev on port 3000)
```
Open:

🌐 Host Shell: http://localhost:3000

🧩 Remote Card 1: http://localhost:3001/remoteEntry.js

🧩 Remote Card 2: http://localhost:3002/remoteEntry.js

## 🎨 Storybook for Shared UI
Develop and test your shared UI components in isolation:
```bash
pnpm --filter @shared/ui storybook
```
Opens Storybook at: http://localhost:6006


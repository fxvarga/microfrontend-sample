# 🧩 Microfrontend Federation Playground

Welcome to the **Microfrontend Federation Playground** — a modern monorepo architecture using:

- ⚡ **Rsbuild** for fast, configurable builds
- 🎯 **Module Federation** for dynamic runtime composition
- 🧱 **pnpm workspaces** for efficient dependency management
- 🧩 **`mf_workflow`** and **`mf_provider`** remotes for isolated microfrontends
- 🧱 **`@shared/ui`** component library for reusable, styled UI components
- 🔧 **Turborepo** for task orchestration and build performance

> Build scalable, composable frontends with minimal overhead and maximum modularity.

---

## 🚀 How to Run the Full System

```bash
pnpm install       # Install all dependencies from the root
pnpm build         # Build shared-ui and both remotes (provider and workflow)
pnpm dev           # Start dev servers in parallel
```

### Local Dev Entry Points

- 🧩 **mf_consumer** (host shell): [http://localhost:3000](http://localhost:3000)
  - Renders the `/workflow` route
  - Dynamically loads:
    - 🔹 `Workflow` component from **mf_workflow**
    - 🔹 `TaskList` component from **mf_provider**

- 🛠 **mf_provider**: [http://localhost:3001/](http://localhost:3001/)
  - TaskList component

- 🧠 **mf_workflow**: [http://localhost:3002/](http://localhost:3002/)
  - Workflow component


## 🖼️ Example Workflow View

![Example of Workflow UI](./sample.png)
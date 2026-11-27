# Construction Phase Rules (`instructions/construction/construction-rules.md`)

## Purpose
The **Construction Phase** determines **HOW** to build each approved Unit ("Bolt") and executes code generation, type-checking, linting, and static export build verification iteratively per Unit.

---

## Per-Unit Execution Loop (Bolt Cadence)
For each Unit defined in [`aidlc-docs/inception/units/units.md`](../../aidlc-docs/inception/units/units.md):

### 1. Functional & NFR Design Check
- Verify data structures, interfaces/contracts, Vietnamese copy accuracy, responsive layout behavior, Unsplash fallback handling, and edge cases documented in [`aidlc-docs/construction/plans/construction-plan.md`](../../aidlc-docs/construction/plans/construction-plan.md).
- Ensure strict compliance with all `NFR-*` and `CON-*` constraints from [`requirements.md`](../../aidlc-docs/inception/requirements/requirements.md) — especially **Static Export compatibility** (`generateStaticParams`, zero server-only API routes, `basePath`-safe links).

### 2. Code Generation
- Write clean, modular, strictly typed code inside project source directories (`src/`, `public/`, root config files) and NEVER inside `aidlc-docs/`.
- Keep every template self-contained under `src/templates/<slug>/` and registered via `src/templates/registry.ts`.
- Respect architectural boundaries from [`architecture.md`](../../aidlc-docs/inception/application-design/architecture.md) and visual tokens from [`ui-design.md`](../../aidlc-docs/inception/application-design/ui-design.md).

### 3. Build & Test Verification
- Run the project verification suite:
  ```bash
  npm run typecheck && npm run lint && npm run build
  ```
- Confirm static export succeeds cleanly into `out/` with zero TypeScript, ESLint, or Next.js build errors.
- Mark the completed Unit `[x]` in [`aidlc-docs/aidlc-state.md`](../../aidlc-docs/aidlc-state.md) and [`aidlc-docs/construction/plans/construction-plan.md`](../../aidlc-docs/construction/plans/construction-plan.md).
- Append a completed log entry in [`aidlc-docs/audit.md`](../../aidlc-docs/audit.md).

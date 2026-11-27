# AI-DLC Core Workflow Rules (`instructions/core-workflow.md`)

## 1. Purpose
This document defines the adaptive **AI-Driven Development Lifecycle (AI-DLC)** workflow governing **Awesome UI Studio (`awesome-apps-UI`)**. It ensures structured requirements elaboration, human-in-the-loop validation gates, modular unit ("Bolt") construction, and complete traceability across sessions.

---

## 2. Workflow Execution Protocol

### Step 1: Session Initialization
1. Inspect [`aidlc-docs/aidlc-state.md`](../aidlc-docs/aidlc-state.md) to identify:
   - Project classification (`Greenfield` — Next.js 16 App Router Static Export)
   - Active Phase (`INCEPTION`, `CONSTRUCTION`, `OPERATIONS`)
   - Current Stage and next pending Unit/Bolt
2. Load only the stage-specific rules from `instructions/` required for the current step.

### Step 2: Adaptive Stage Progression
- **ALWAYS-RUN Stages**:
  1. `Inception / Workspace Detection`
  2. `Inception / Requirements Analysis`
  3. `Inception / Workflow Planning`
  4. `Construction / Code Generation` (per Unit)
  5. `Construction / Build & Test` (`npm run typecheck && npm run lint && npm run build`)
- **CONDITIONAL Stages** (executed for multi-component UI showcase):
  1. `Inception / User Stories`
  2. `Inception / Application & UI Design`
  3. `Inception / Units Generation`
  4. `Construction / Functional & NFR Design`

### Step 3: Mandatory Post-Prompt Audit & State Update
Before ending **any** turn where a user prompt was processed:
1. Update [`aidlc-docs/aidlc-state.md`](../aidlc-docs/aidlc-state.md) if any stage, unit, or milestone progressed.
2. Append a complete, un-truncated log entry to [`aidlc-docs/audit.md`](../aidlc-docs/audit.md) with:
   - ISO 8601 timestamp
   - Active AI-DLC Phase & Stage
   - Raw User Prompt / Decision
   - Summary of Artifacts & Code Modified
   - Verification / Gate Status

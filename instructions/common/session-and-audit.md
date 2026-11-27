# Common Rules: Session Continuity, Audit Logging & Question Format

## 1. Session Continuity (`aidlc-docs/aidlc-state.md`)
- [`aidlc-docs/aidlc-state.md`](../../aidlc-docs/aidlc-state.md) is the single source of truth for workflow progress.
- To resume work in a new session:
  1. Read `aidlc-docs/aidlc-state.md`.
  2. Locate the first unchecked `[ ]` stage or implementation unit.
  3. Read the corresponding plan in [`aidlc-docs/inception/plans/execution-plan.md`](../../aidlc-docs/inception/plans/execution-plan.md) or [`aidlc-docs/construction/plans/construction-plan.md`](../../aidlc-docs/construction/plans/construction-plan.md) and continue from that exact step.

## 2. Audit Trail Rules (`aidlc-docs/audit.md`)
- **Append-Only**: Never delete or rewrite previous audit entries.
- **Every Prompt Logged**: Every completed user prompt MUST add a new section at the bottom of [`aidlc-docs/audit.md`](../../aidlc-docs/audit.md).
- **Entry Template**:
  ```markdown
  ## [YYYY-MM-DDTHH:MM:SSZ] — Prompt N: <Short Title>
  - **Phase / Stage**: `<INCEPTION | CONSTRUCTION | OPERATIONS> / <Stage Name>`
  - **User Input**: "<Exact user request>"
  - **Clarifications / Decisions**: <Any options selected or approved by user>
  - **Artifacts & Files Updated**:
    - `<file path>` — <description>
  - **Verification & Gate Status**: <Build/test results or current approval gate>
  ```

## 3. Clarification Question Rules
- Whenever requirements, UX behavior, or technical trade-offs are underspecified:
  - Formulate clear multiple-choice options with the recommended option listed first (`(Recommended) ...`).
  - Record the user's selected answers in both [`aidlc-docs/inception/requirements/requirements.md`](../../aidlc-docs/inception/requirements/requirements.md) and [`aidlc-docs/audit.md`](../../aidlc-docs/audit.md).

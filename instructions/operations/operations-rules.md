# Operations Phase Rules (`instructions/operations/operations-rules.md`)

## Purpose
The **Operations Phase** governs static export packaging, deployment readiness, release verification, and ongoing maintenance of **Awesome UI Studio (`awesome-apps-UI`)**.

---

## Stage 1: Build, Packaging & Deployment Verification
- Verify static export build output (`out/`) contains all expected HTML pages (`/`, `/templates/<slug>/`, `/preview/<slug>/`) and static assets, and passes smoke checks.
- Verify optional `NEXT_PUBLIC_BASE_PATH` build works cleanly for GitHub Pages subpath hosting as well as root-domain hosting on Cloudflare Pages.
- Ensure target deployment steps documented in [`aidlc-docs/operations/release-and-packaging.md`](../../aidlc-docs/operations/release-and-packaging.md) are verified.

## Stage 2: Continuous Feedback Loop
- Any new template addition, design adjustment, or bug report triggers a new scoped Unit (e.g., `UNIT-07`) or maintenance cycle recorded in [`aidlc-docs/construction/plans/construction-plan.md`](../../aidlc-docs/construction/plans/construction-plan.md), [`aidlc-docs/aidlc-state.md`](../../aidlc-docs/aidlc-state.md), and [`aidlc-docs/audit.md`](../../aidlc-docs/audit.md).

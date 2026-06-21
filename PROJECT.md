# Bun Workflow Test Monorepo

SylphxAI/bun-workflow-test is a tooling fixture that verifies the shared Bun release workflow against a small workspace-package monorepo.

## Lifecycle

- State: `active`
- Layer: `tooling`
- Machine manifest: [`.doctrine/project.json`](./.doctrine/project.json)

## Goals

- Provide a real Bun workspace monorepo for validating shared release workflow behavior.
- Exercise workspace protocol dependency resolution between `@sylphx/workflow-test-core` and `@sylphx/workflow-test-utils`.
- Publish test packages through the shared Sylphx release workflow when release changes are present.

## Non-Goals

- This repository is not a production application or customer-facing SDK.
- This repository does not own the shared release workflow implementation.
- This repository does not own enterprise engineering doctrine.

## Boundary

This repository owns the workflow-test fixture packages and their release-fixture wiring. The reusable release workflow belongs in `SylphxAI/.github`; changes to release semantics must be made there and then verified here.

## Public Surfaces

- Package export: `@sylphx/workflow-test-core`
- Package export: `@sylphx/workflow-test-utils`
- Release workflow caller: [`.github/workflows/release.yml`](./.github/workflows/release.yml)
- Workspace fixture documentation: [`README.md`](./README.md)

## Delivery

The repository currently has no required status contexts on `main`. Pushes to `main` run the Release workflow, which calls `SylphxAI/.github/.github/workflows/release.yml@main`. Release proof is a successful workflow run plus npm package readback when a publish occurs.

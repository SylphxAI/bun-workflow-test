# Workflow Test Monorepo

This is a test monorepo to verify the bun CI/CD workflow works correctly.

## Structure

- `packages/utils` - Utility functions (no dependencies)
- `packages/core` - Core library (depends on `utils` via `workspace:*`)

## Workspace Dependencies

The `core` package depends on `utils` using workspace protocol:

```json
"dependencies": {
  "@sylphx/workflow-test-utils": "workspace:*"
}
```

## Scripts

- `bun install` - Install dependencies
- `bun run build` - Build all packages
- `bun run test` - Run tests
- `bun run changeset` - Create a changeset
- `bun run version-packages` - Update versions
- `bun run release` - Build and publish

## CI/CD

Uses shared workflow: `SylphxAI/.github/.github/workflows/publish-npm.yml@main`

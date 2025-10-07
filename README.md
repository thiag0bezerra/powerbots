# powerbots (pnpm workspace example)

This repository is configured as a pnpm workspace. It contains two example packages under `packages/`:

- `@powerbots/example-a` - a tiny module that exports a greeting function.
- `@powerbots/example-b` - depends on `example-a` using the `workspace:*` protocol.

How to use:

1. Ensure pnpm is installed (see https://pnpm.io/installation).
2. From the repository root run `pnpm install` to link workspace packages.
3. From `packages/example-b` you can require the local `@powerbots/example-a`.
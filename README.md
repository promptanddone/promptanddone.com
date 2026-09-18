# Prompt & Done

A static site built with Astro.

Link and tool content lives in `src/data/links.ts` — add a tool there and it renders. Shared document metadata lives in `src/layouts/BaseLayout.astro`, page markup in `src/pages/index.astro`, and styling in `src/styles/global.css`. `src/components/Icon.astro` holds the brand marks (official [Simple Icons](https://simpleicons.org) paths, CC0 files; the marks remain their owners' trademarks and are used here only to link to our own accounts).

## Local development

Use Node.js 24 (also specified in `.nvmrc`).

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run check
npm run build
npm run preview
```

The production files are generated in `dist/`. Hosting requires only these static files; there is no application server.

## Continuous integration

`.github/workflows/ci.yml` checks and builds pull requests and pushes to `main`. Successful builds upload a `static-site` artifact.

## Cloudflare deployment

The existing Cloudflare Pages project is `promptanddone`, in account `978315d71597bcba41eb6955973c430b`. Its Pages address is https://promptanddone.pages.dev.

The workflow deploys the exact static artifact from the successful build when `main` is pushed, or when manually run on `main`. Pull requests only run checks and build. Production deployments run one at a time.

### One-time setup

1. Create a Cloudflare API token with **Account → Cloudflare Pages → Edit**, restricted to the account above.
2. Add it as the GitHub repository Actions secret `CLOUDFLARE_API_TOKEN`.
3. Push these changes to `main` and confirm the **CI** workflow's build and deployment jobs succeed.

The account ID is a public identifier; the API token must stay in GitHub Actions secrets. No Git integration or new Cloudflare project is required.

### Manual deployment

After authenticating Wrangler with `npx wrangler login`:

```sh
npm run check
npm run build
npx wrangler pages deploy dist --project-name=promptanddone --branch=main
```

### Rollback

Open the existing Pages project's Deployments tab and roll back to a previous successful production deployment. Revert the corresponding commit on `main` to keep the source aligned with production.

### Deployment status

The deployment token is configured as an encrypted repository secret. Every push to `main` runs validation, builds the static site, and deploys it to the existing Cloudflare Pages project. Check the repository’s Actions tab for each deployment’s status.

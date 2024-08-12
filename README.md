# ambisleep-fe-vue

## About
This is a Vue based frontend  for [Ambisleep](https://github.com/enwave64/ambisleep). Ambisleep is a purpose built sleep machine assuming audio playback by [Music Player Daemon](https://www.musicpd.org/). The original Ambisleep was a fork of [Wolfgang](https://github.com/daed/wolfgang), python3 based, used Tkinter for a simple front end, and called MPC commands to play music files stored on the target machine.

This version is just a front end, intended to make REST calls to [backend Go service](https://github.com/enwave64/go-home-auto/blob/main/restapi) on a Raspberry Pi (or some other player device running MPD) that handles the MPC commands.

## Config

Create an .env or .env.local file. Specify your backend service API URL like so: 
`export VITE_AMBISLEEP_REST_URL="http://<URL|IP:port>/api/v1"`

### Deployment
optional Dockerfile and nginx.conf for deployment/production, assuming closed intranet
otherwise adjust accordingly


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

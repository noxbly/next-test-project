# next-test-project

A minimal Next.js sample app used to test the "SPA build" upload/deploy feature on
[noxbly.com](https://noxbly.com).

## Purpose

This project has no functional purpose on its own — it exists purely as a test fixture. It verifies
that noxbly.com can correctly detect a Next.js project (via `package.json`), run its build step, and
deploy the resulting static output.

## Stack

- [Next.js 14](https://nextjs.org/) (Pages Router), configured with `output: 'export'` for static
  HTML export rather than a Node.js server
- [React 18](https://react.dev/)

## Structure

```
pages/_app.js     # global App wrapper
pages/index.js    # home page: a heading, a description, and a click counter
styles/globals.css
next.config.js    # sets output: 'export' (static export build)
```

## Running locally

```bash
npm install
npm run dev       # start the Next.js dev server
npm run build     # static export goes to out/
```

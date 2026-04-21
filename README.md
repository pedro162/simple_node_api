# Contacts API

Simple REST API for managing contacts (people and organizations). Built with Express, NeDB, and Babel.

## Requirements

- Node.js (LTS recommended)
- npm

## Setup

```bash
npm install
```

## Development

Runs the API with automatic reload via Nodemon.

```bash
npm run start
```

## Build

Transpile the source to `dist/`.

```bash
npm run build
```

## Production

Build first, then run the compiled server.

```bash
npm run serve
```

## Project Structure

```
src/
  server.js
  api-v1/
    api-router.js
    models/
      person-model.js
    paths/
      organization-router.js
      person-router.js
```

## Notes

- Data is stored locally using NeDB.
- API routes are under the `api-v1` folder.

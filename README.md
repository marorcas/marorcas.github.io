# Portfolio

A personal portfolio website built with Astro and CSS. 

## Tech Stack

- [Astro](https://astro.build/)
- CSS
- Docker
- GitHub Actions
- GitHub Pages

## Features

- Dark/light mode with theme persistence
- Dockerised with image published to GHCR
- Automated CI/CD via GitHub Actions

## Running locally

### Standard

```bash
npm install
npm run dev
```

### Docker

```bash
docker compose up --build
```

Open `http://localhost:4321` in your browser.

## CI/CD

Two GitHub Actions workflows run on every push to `main`:

- **Deploy** — builds the Astro site and deploys to GitHub Pages
- **Docker** — builds and pushes the Docker image to GitHub Container Registry

## Docker image

```bash
docker pull ghcr.io/marorcas/portfolio:latest
```

## License

All rights reserved. This code may not be copied, modified, or redistributed without permission.
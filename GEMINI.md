## Project Overview

This is a SvelteKit web application, written entirely in TypeScript. It appears to be a personal portfolio or blog, given the "About Me" and "Experiences" sections. The project is built with SvelteKit and uses a Node.js backend. It leverages PocketBase as a backend service, particularly for the blogging system, which suggests it has dynamic content and user interactions. The application is designed to be deployed as a standalone Node.js server.

**Key Technologies:**

*   **Language:** TypeScript
*   **Framework:** SvelteKit
*   **UI:** Svelte 5 (with Runes)
*   **Styling:** Pure CSS with Pico.css, `general.css` for resets and base styles, and `styles.css` for specific component styles.
*   **Backend:** Node.js (with `@sveltejs/adapter-node`)
*   **Database/Backend Service:** PocketBase (used for the blog)
*   **Bundler:** Vite
*   **Testing:** Playwright (integration), Vitest (unit)
*   **Linting & Formatting:** ESLint, Prettier
*   **Deployment:** Docker, GitHub Actions
*   **Content:** Markdown (with `mdsvex`)

## Building and Running

### Development

To start the development server, run:

```bash
npm run dev
```

This will start the server on `localhost:5173` by default.

### Building

To create a production build, run:

```bash
npm run build
```

### Previewing the Build

To preview the production build, run:

```bash
npm run preview
```

### Testing

To run the tests, use the following commands:

*   **All tests:** `npm run test`
*   **Integration tests:** `npm run test:integration`
*   **Unit tests:** `npm run test:unit`

### Linting and Formatting

To check for linting and formatting errors, run:

```bash
npm run lint
```

To automatically fix formatting issues, run:

```bash
npm run format
```

## Development Conventions

*   **Language:** The entire project is written in TypeScript, ensuring type safety and improved code quality.
*   **Backend:** The application uses PocketBase as a backend-as-a-service for the blogging functionality. This includes content storage, and potentially user authentication and authorization.
*   **Code Style:** The project uses Prettier for code formatting and ESLint for linting. There are pre-commit hooks to enforce these styles.
*   **Styling:** The project uses a combination of Pico.css for base components, `general.css` for a CSS reset and global styles, and `styles.css` for more specific, component-level styling. This approach keeps the styling organized and maintainable.
*   **Testing:** The project has both unit tests (with Vitest) and integration tests (with Playwright). Test files are located in the `src` and `tests` directories.
*   **Commits:** The project uses `semantic-release` for automated versioning and changelog generation. Commit messages should follow the Conventional Commits specification.
*   **Content:** Content is written in Markdown and processed with `mdsvex`. Experience details are stored in markdown files in `src/routes/experiences`.

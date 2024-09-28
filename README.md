# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Bin Directory

This directory contains utility scripts used for various tasks in the project.

### Scripts

#### getUnsplashInfo.js

This script fetches information about a specific photo from the Unsplash API.

Usage:

- `<API_KEY>`: Your Unsplash API client ID
- `<PHOTO_ID>`: The ID of the photo you want to fetch information for

The script returns a JSON object containing the following information about the photo:

- blur_hash
- URLs
- color
- ID
- description
- alt_description

#### createAboutMeSummary.js

This script generates an "About Me" summary by combining information from experience markdown files and the tech stack.

Usage:

```sh

node createAboutMeSummary.js [OUTPUT_PATH]

```

- `[OUTPUT_PATH]`: Optional. The path where the output file should be saved. If not provided, the default is `.generated/about-me.txt` in the project root.

The script performs the following tasks:

1. Reads markdown files from the `src/routes/experiences` directory
2. Extracts tech stack information from `src/constants/techStack.ts`
3. Combines this information into a single "About Me" text file
4. Organizes the tech stack by category

The generated file includes:

- An "Experiences" section with content from the markdown files
- A "Tech Stack" section listing technologies by category

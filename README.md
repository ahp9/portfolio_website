# Personal Portfolio
 
My little corner of the internet, where my education, work, projects, and the important evidence that I am a real person all live under one roof. It is still a work in progress, much like most good ideas and at least half of my LEGO collection. For now, it is a handy way to learn what I have worked on, what I care about, and how I approach building software.
 
## Project status

This portfolio is under active development. Some sections, links, project pages, and content may be incomplete or change as the site grows.
 
## Tech stack
 
- [React](https://react.dev/) for the component-based user interface
- [TypeScript](https://www.typescriptlang.org/) for static typing
- [Vite](https://vite.dev/) for local development and production builds
- Plain CSS for component styling, layout, and design tokens
- [ESLint](https://eslint.org/) for code quality checks
 
## Features
 
- Responsive, single-page portfolio layout with a fixed header for in-page navigation
- Hero section with a short introduction and a button that scrolls to the projects
- About section with a categorized skills overview
- Education history with tags for each degree
- Project cards that expand on click to show the problem, solution, hard part, role, and grade. An expanded card previews the live demo in an iframe, the project PDF, or a static image, in that order of preference. Sibling cards animate to their new positions when a card opens or closes.
- Work history as an accordion list. Clicking a tag filters the list to jobs with that tag, and hovering a tag previews the filter.
- Reusable UI components and shared design tokens
 
## Getting started

### Prerequisites

Install the following before running the project locally:
 
- [Node.js](https://nodejs.org/), using a currently supported LTS release
- npm, which is included with Node.js

### Installation

Clone the repository and install its dependencies:

```bash
git clone <repository-url>
cd portfolio_website
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal. The page automatically reloads when source files change.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run build` | Type-checks the project and creates an optimized production build in `dist/`. |
| `npm run lint` | Runs ESLint across the codebase. |
| `npm run preview` | Serves the production build locally for verification. |

## Project structure

```text
.
├── public/                  # Static assets served as-is (images, PDFs, favicon)
├── src/
│   ├── assets/              # Assets imported by application code
│   ├── components/
│   │   ├── layout/          # Shared page layout components
│   │   ├── sections/        # Main portfolio sections
│   │   └── ui/              # Reusable interface components
│   ├── data/                # Content for education, projects, jobs, skills, and navigation
│   ├── styles/              # Global styles and design tokens
│   ├── App.tsx              # Top-level application composition
│   └── main.tsx             # React application entry point
├── index.html               # Vite HTML entry point
├── eslint.config.js         # ESLint configuration
├── tsconfig*.json           # TypeScript configuration
└── vite.config.ts           # Vite configuration
```
 
## Updating portfolio content

Most repeatable content is kept separate from the presentation components:

- Edit `src/data/education.ts` to update education entries.
- Edit `src/data/projects.ts` to add or modify projects. A project with a `demo` link shows that site in the expanded card. Without one, a `pdf` link is shown, and otherwise `image`. The `grade` field is optional.
- Edit `src/data/jobs.ts` to add or modify work entries. Set `takeaway` to `null` to leave it out.
- Edit `src/data/skills.ts` to update skill categories and items.
- Edit `src/data/navigation.ts` to change the header navigation.
- Update section copy in the corresponding directory under `src/components/sections/`.

Tags take a `color` value that maps to a class in `src/components/ui/Tag/Tag.css`. The available colors are `purple`, `blue`, `pink`, `orange`, `green`, `coral`, and `teal`.

Page sections render in the order set in `src/App.tsx`: Hero, About, Education, Projects, and Work. A new section also needs an entry in `src/data/navigation.ts` with an `href` that matches the section's `id`.

Static files that need a stable public URL belong in `public/`. Files that should be imported and processed as part of the application bundle belong in `src/assets/`.

## Production build

Create a deployable build with:
 
```bash
npm run build
```

The generated `dist/` directory can be deployed to any static hosting provider. Before deploying, verify the build locally:

```bash
npm run preview
```

## License

This is a personal portfolio project. No license has been added, so the source code and content are not currently offered for reuse or redistribution.

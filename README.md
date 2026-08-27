# UI React Project

A responsive React interface for presenting prospective customer segments for a digital banking platform. The page combines a branded header, an explanatory hero section, and image-based audience cards that can be scrolled horizontally.

## Features

- Responsive layout built with React and Tailwind CSS.
- Customer segmentation cards for:
  - Satisfied customers
  - Underserved customers
  - Underbanked customers
  - Additional audience segments
- Horizontally scrollable card section with hidden scrollbars.
- Reusable components for the navigation bar, hero content, cards, and supporting content.
- Lucide icon integration for interface icons.
- Vite hot module replacement for fast development.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd ui-react-project
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open the URL shown in the terminal, usually [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for previewing. |
| `npm run lint` | Runs ESLint across the project. |

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── section1
        ├── section1.jsx
        ├── navbar.jsx
        ├── center.jsx
        ├── hero-section.jsx
        ├── leftsection.jsx
        ├── rightsection.jsx
        ├── rightcard.jsx
        ├── rightcontent.jsx
        └── arrowpart.jsx
```

## Customizing the Audience Cards

Audience data is defined in [`src/App.jsx`](./src/App.jsx). Each card accepts an image URL, descriptive text, button label, and accent color:

```js
{
  image: "https://example.com/image.jpg",
  intro: "Description of the customer segment",
  btn1: "Segment label",
  color: "blue"
}
```

Add, remove, or update entries in the `users` array to change the cards displayed by the interface.

## Assets

The current design uses externally hosted images and icons. Make sure those URLs remain available when deploying the application, or replace them with local assets in a production environment.

## Production Build

Build the application:

```bash
npm run build
```

The generated files are placed in the `dist/` directory and can be deployed to any static hosting provider that supports a single-page application.

# AcklerFest

A semi-annual party celebration website built with 11ty (Eleventy).

## About

AcklerFest hosts two parties per year:
- **Spring Party**: Date TBD for 2026
- **Winter Party**: December 14, 2025

## Features

- Live countdown timer to the next event
- Event details and information
- Pre-registration link
- Downloadable invitation
- Directions with Google Maps integration
- Responsive design

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
# or
make install
```

### Running Locally

```bash
npm start
# or
make serve
```

This will start a local development server at `http://localhost:3000` with live reload.

### Building for Production

```bash
npm run build
# or
make build
```

This will generate the static site in the `_site` directory.

### Makefile Commands

- `make help` - Show available commands
- `make install` - Install dependencies
- `make build` - Build the site
- `make serve` - Start development server
- `make clean` - Remove build artifacts and node_modules
- `make start` - Install dependencies and start server

## Deployment

This site automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

### Setup GitHub Pages (REQUIRED - one-time setup):

**You must enable GitHub Pages BEFORE the workflow will work:**

1. Go to your repository settings: https://github.com/andrewkrug/acklerfest.github.io/settings/pages
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions" from the dropdown
3. Click "Save" if needed
4. Once enabled, push to the `main` branch or re-run the failed workflow

**Important**: The deployment will fail with a 404 error if GitHub Pages is not enabled first.

### After Setup:
- The site will automatically build and deploy on every push to `main`
- You can also trigger manual deployments from the Actions tab
- Site will be available at: https://andrewkrug.github.io/acklerfest.github.io/

## Project Structure

```
.
├── src/
│   ├── _layouts/
│   │   └── base.njk          # Base layout template
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   └── countdown.js      # Countdown timer logic
│   ├── assets/
│   │   ├── hero-image.png    # Hero artwork
│   │   └── winter_invite_2025.pdf  # Downloadable invitation
│   └── index.njk             # Home page
├── .eleventy.js              # 11ty configuration
└── package.json              # Dependencies
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

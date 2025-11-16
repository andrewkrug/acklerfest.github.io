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

### Setup GitHub Pages (one-time):
1. Go to your repository settings
2. Navigate to Pages (under Code and automation)
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Push your code to the `main` branch

The site will automatically build and deploy on every push to `main`.

### Manual Deployment:
You can also trigger a manual deployment from the Actions tab in GitHub.

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

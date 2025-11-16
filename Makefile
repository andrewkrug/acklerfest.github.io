.PHONY: install build serve clean help

# Default target
help:
	@echo "AcklerFest - Available Make Commands"
	@echo "====================================="
	@echo "make install    - Install dependencies"
	@echo "make build      - Build the site"
	@echo "make serve      - Start development server on port 3000"
	@echo "make clean      - Remove build artifacts"
	@echo "make help       - Show this help message"

# Install npm dependencies
install:
	npm install

# Build the site
build:
	npm run build

# Start development server
serve:
	npm start

# Clean build artifacts
clean:
	rm -rf _site
	rm -rf node_modules

# Quick start (install + serve)
start: install serve

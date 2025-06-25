# Gemini Image Generator 🎨

This is a React + TypeScript web app that generates images using Google’s Imagen-3 model through the Gemini API.

## Features

- Generate images from natural language prompts
- Choose number of images to generate
- Responsive and modern UI using Tailwind CSS
- Google Imagen-3 (via Gemini API) integration

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Google Generative AI (Imagen-3)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/MeowLuu/Gemini-Image-Generator-.git
cd Gemini-Image-Generator-
npm install
cp .env.example .env
VITE_GEMINI_API_KEY=your-google-api-key-here
npm run dev
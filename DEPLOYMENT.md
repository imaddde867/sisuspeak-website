# Deployment Guide for Sisu Speak Website

This guide provides instructions for deploying the Sisu Speak website to various environments.

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/sisu-speak/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Production Build

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server locally:

```bash
npm run start
# or
yarn start
```

## Deployment Options

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repository to Vercel (https://vercel.com)
3. Configure your environment variables
4. Deploy

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify (https://netlify.com)
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy

### Traditional Hosting

1. Create a static export:
   ```bash
   npm run export
   # or
   yarn export
   ```

2. Upload the contents of the `out` directory to your web server

## Environment Variables

The following environment variables are used in this project:

- `NEXT_PUBLIC_API_URL`: URL of the backend API (if applicable)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID (optional)

Create a `.env.local` file in the project root for local development:

```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

For production, set these variables in your hosting provider's dashboard.

## Troubleshooting

If you encounter any deployment issues, please check:

1. Node.js version compatibility
2. Correct environment variables
3. Build logs for error messages

For further assistance, contact the development team.

# React Vite Quiz App - Deployment Guide

## Issues Found and Fixed

### 1. **Dependencies Not Installed**
**Problem:** The main error was `vite: not found` which occurs when `node_modules` are not installed.

**Solution:**
```bash
npm install
```

### 2. **Invalid CSS Image Path**
**Problem:** Both `style.css` and `src/index.css` had an invalid path:
```css
background: white url(../quix-app/images/bg1.jpg) no-repeat scroll center;
```

**Solution:** Fixed the path to reference the correct location in the public directory:
```css
background: white url(/images/bg1.jpg) no-repeat scroll center;
```

## Build Success
✅ The project now builds successfully with no warnings:
- All images are properly processed and moved to `/assets/` directory
- CSS and JavaScript are properly minified and bundled
- React app is successfully integrated

## Common Deployment Issues and Solutions

### 1. **Base Path Issues**
If deploying to a subdirectory (e.g., `https://example.com/quizapp/`), you need to configure the base path in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/quizapp/', // Add this line with your subdirectory
  server: {
    port: 5175,
  },
})
```

### 2. **Static File Serving**
Ensure your hosting platform serves static files correctly:
- **Netlify/Vercel:** Just upload the `dist` folder
- **Apache/Nginx:** Configure to serve `index.html` for all routes
- **GitHub Pages:** Use `base: '/quizapp/'` in config (or your repository name)

### 3. **Asset Loading Issues**
If images/assets don't load:
- Check if the hosting platform supports absolute paths starting with `/`
- Consider using relative paths or CDN
- Verify all files in `dist/assets/` are uploaded

### 4. **Environment Variables**
If using environment variables:
```javascript
// In your React code, prefix with VITE_
const API_URL = import.meta.env.VITE_API_URL
```

## Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your hosting platform

4. **Configure your server** to serve `index.html` for all routes (SPA routing)

## Server Configuration Examples

### Netlify (`_redirects` file in `public/`)
```
/*    /index.html   200
```

### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Apache (`.htaccess`)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Your Project Structure
```
quizapp/
├── dist/                 # Built files (deploy this folder)
├── public/
│   └── images/          # Static assets
├── src/
│   ├── App.jsx          # React component
│   ├── main.jsx         # React entry point
│   └── index.css        # React styles
├── index.html           # Main HTML file
├── style.css            # Global styles
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Next Steps
1. Your build is now working correctly
2. Upload the `dist` folder to your hosting platform
3. Configure your server to serve static files and handle routing
4. Test the deployment to ensure all assets load correctly

If you encounter any specific deployment errors, please share the error message and hosting platform you're using.
# Deploying SimonWebTech Digital to Netlify

## Option 1: Frontend on Netlify + Backend Elsewhere (Recommended)

### Step 1: Deploy Frontend to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist/public`
7. Click Deploy

### Step 2: Deploy Flask Backend

Choose one of these services:

#### **Railway.app (Easiest)**
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repo
4. Add environment variables (PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT)
5. Railway will auto-deploy

#### **Render.com**
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Select GitHub repo
4. Runtime: Python 3.12
5. Build command: `pip install -r requirements.txt`
6. Start command: `gunicorn app:app`
7. Add environment variables
8. Deploy

#### **Heroku**
1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Add PostgreSQL addon: `heroku addons:create heroku-postgresql:hobby-dev`
4. Push: `git push heroku main`

### Step 3: Connect Frontend to Backend

On Netlify, add environment variable:
```
VITE_API_URL=https://your-backend-url.com
```

Update your frontend API calls:
```typescript
const apiUrl = import.meta.env.VITE_API_URL || '/api';
const response = await fetch(`${apiUrl}/inquiries`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formState),
});
```

---

## Option 2: Serverless Backend with Netlify Functions

Uses Netlify Functions (AWS Lambda) to handle form submissions. No separate backend needed.

1. Your React frontend is deployed on Netlify
2. Form submissions go to `/api/inquiries` → Netlify Function
3. Function connects to PostgreSQL database
4. ✅ Everything runs on Netlify

**Requires:** PostgreSQL database accessible from internet (e.g., Railway, Heroku, Neon)

---

## Quick Netlify Setup

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Link to Netlify:
```bash
netlify link
```

3. Deploy locally:
```bash
netlify deploy
```

4. Full production deploy:
```bash
netlify deploy --prod
```

---

## Database Setup (For Any Option)

If using Railway/Render/Heroku backend, they provide PostgreSQL:

1. Add PostgreSQL addon to your backend service
2. Get connection string
3. Set as environment variable: `DATABASE_URL`
4. Your Flask app connects automatically

---

## Environment Variables Needed

**On Netlify (Frontend):**
- `VITE_API_URL` - Your backend URL

**On Backend Service (Flask):**
- `PGHOST` - Database host
- `PGPORT` - Database port
- `PGDATABASE` - Database name
- `PGUSER` - Database user
- `PGPASSWORD` - Database password

Done! Your site will be live at `your-site-name.netlify.app` 🚀
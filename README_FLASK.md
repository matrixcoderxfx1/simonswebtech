# SimonTechSolutions - Flask Setup

## 🚀 Run Locally with Flask

### Prerequisites
- Python 3.8+
- PostgreSQL installed and running
- Node.js (for building React frontend)

### Step 1: Install Python Dependencies
```bash
pip install Flask==3.0.0 flask-cors==4.0.0 psycopg2-binary==2.9.9 python-dotenv==1.0.0
```

### Step 2: Set Up PostgreSQL
1. Start PostgreSQL service
2. Create a database:
```bash
createdb simontechsolutions
```

### Step 3: Configure Environment
Copy `.env.example` to `.env` and fill in your PostgreSQL credentials:
```bash
cp .env.example .env
```

### Step 4: Build React Frontend
```bash
npm run build
```

### Step 5: Run the Flask App
```bash
python app.py
```

The site will be live at **http://localhost:5000**

### Testing the Form
1. Navigate to http://localhost:5000
2. Fill out the "Let's Build Something Great" form
3. Click "Send Request"
4. You should see a success message and the data will be saved to PostgreSQL

---

## 📁 Project Structure
- `app.py` - Flask backend server
- `client/` - React frontend source code
- `dist/public/` - Built React app (served by Flask)

## 🛠️ Troubleshooting

**Database Connection Error?**
- Ensure PostgreSQL is running: `psql -U postgres`
- Check `.env` credentials match your setup

**Port 5000 already in use?**
- Edit `app.py` line: `app.run(debug=True, host='0.0.0.0', port=YOUR_PORT)`

**Missing frontend files?**
- Run `npm run build` to generate `dist/public/` folder
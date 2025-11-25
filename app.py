import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='dist/public', static_url_path='')
CORS(app)

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv('PGHOST', 'localhost'),
        database=os.getenv('PGDATABASE', 'simontechsolutions'),
        user=os.getenv('PGUSER', 'postgres'),
        password=os.getenv('PGPASSWORD'),
        port=os.getenv('PGPORT', 5432)
    )
    return conn

# Initialize database tables
def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute('''
            CREATE TABLE IF NOT EXISTS inquiries (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                project_type TEXT NOT NULL,
                budget TEXT,
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()
        print("✓ Database initialized")
    except Exception as e:
        print(f"Error initializing database: {e}")
        conn.rollback()
    finally:
        cur.close()
        conn.close()

# API Routes
@app.route('/api/inquiries', methods=['POST'])
def create_inquiry():
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('name') or not data.get('email') or not data.get('projectType'):
            return jsonify({'error': 'Missing required fields'}), 400
        
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute('''
            INSERT INTO inquiries (name, email, phone, project_type, budget, message)
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING id, name, email, phone, project_type, budget, message, created_at
        ''', (
            data.get('name'),
            data.get('email'),
            data.get('phone', ''),
            data.get('projectType'),
            data.get('budget', ''),
            data.get('message', '')
        ))
        
        inquiry = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()
        
        return jsonify({
            'id': inquiry[0],
            'name': inquiry[1],
            'email': inquiry[2],
            'phone': inquiry[3],
            'projectType': inquiry[4],
            'budget': inquiry[5],
            'message': inquiry[6],
            'createdAt': inquiry[7]
        }), 201
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

# Serve React app for all other routes
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def catch_all(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return app.send_static_file(path)
    return app.send_static_file('index.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const body = JSON.parse(event.body || '{}');

  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';

  if (method === 'POST') {
    try {
      const response = await fetch(`${backendUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      return {
        statusCode: response.status,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
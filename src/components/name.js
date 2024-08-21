import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// PostgreSQL client setup
const pool = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Sanj@8951",
  port: 5432,
});

pool.connect();
// Endpoint to store translated text
app.post('/api/translations', async (req, res) => {
  const { translatedText } = req.body;

  try {
    // Insert translated text into the database
    const queryText = 'INSERT INTO translations ';
    const result = await pool.query(queryText, [translatedText]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error storing translation:', error);
    res.status(500).send('Error storing translation');
  }
});


const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'user14',
  password: '7SAZONQZ',
  database: ''
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });
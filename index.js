const pg = require('pg');

// Create a new client instance
const client = new pg.Client({
  host: '192.168.0.207',
  port: 5432,
  user: 'user14',
  password: '7SAZONQZ',
  database: ''
});

const getFromDb = async () => {
    await client.connect();
    const result = await client.query('SELECT * FROM grades');
    console.table(result.rows);
    await client.end();
}

getFromDb();
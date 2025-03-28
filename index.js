const express = require('express');
const pg = require('pg');
const app = express();
const client = new pg.Client({
    host: '192.168.0.207',
    port: 5432,
    user: 'user14',
    password: '7SAZONQZ',
    database: 'user14_db'
})

app.use(express.json()); // Middleware to parse JSON request bodies
//app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/grades/:student_id/', async (req, res) => {
    const studentId = req.params.student_id;
    console.log("Student ID:", studentId);
    const query = 'SELECT * FROM grades WHERE student_id = ' + studentId;
    const result = await client.query(query);
    console.log("Query Result:");
    console.table(result.rows);
    await client.end();
    res.end();
});
app.post('/grades/:student_id/', async (req, res) => {
    const studentId = req.params.student_id;
    console.log("Student ID:", studentId);
    console.log("Request Body:", req.body);
    res.end();
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 
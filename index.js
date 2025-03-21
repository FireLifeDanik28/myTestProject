const pg = require('pg');

// Create a new client instance
const client = new pg.Client({
  host: '192.168.0.207',
  port: 5432,
  user: 'user14',
  password: '7SAZONQZ',
  database: 'user14_db'
});

const getFromDb = async () => {
    
    const result = await client.query('SELECT * FROM grades');
    console.table(result.rows);
}

const insertToDb = async (student_id, course_id, grade) => {
    await client.connect();
    student_id = prompt("Podaj student id: ");
    course_id = prompt("Podaj id przedmiotu: ");
    grade = prompt("Podaj ocene: ");
    const result = await client.query("INSERT INTO grades (" + student_id + ", " + course_id + ", " + grade + ") VALUES(1, 1, 5);")
}
client.connect().then(async () => {
    await insertToDb();
    await getFromDb();
}).then
await client.end();
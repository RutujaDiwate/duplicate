import express from "express";
import mysql from "mysql";
const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql_1590357',
  database: 'employee',
});

// Connect to the database
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

// Define an API endpoint to check email and password matching
app.get('/login', (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  // Perform a database query to check if the email and password match
  const query = `SELECT * FROM data WHERE email = '${email}' AND password = '${password}'`;
  connection.query(query, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Login failed');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
import express from "express";
import mysql from "mysql";
import bcrypt from "bcrypt";
import 

const app = express();

const port = 3000;
const saltRounds = 10;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql_1590357',
  database: 'employee'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', email, async (error, rows) => {
    if (error) {
      res.status(500).json({
        "code": 500,
        "message": "Internal server error"
      });
    } else {
      if (rows.length > 0) {
        const comparison = await bcrypt.compare(password, rows[0].password);
        if (comparison) {
          res.status(200).json({
            "code": 200,
            "message": "Login successful"
          });
        } else {
          res.status(401).json({
            "code": 401,
            "message": "Invalid email or password"
          });
        }
      } else {
        res.status(404).json({
          "code": 404,
          "message": "User not found"
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
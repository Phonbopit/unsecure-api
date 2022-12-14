const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'test-db',
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  rowsAsArray: true,
})

app.get('/hello', () => {
  res.json({ ok: true })
})

app.post('/users', (req, res) => {
  const { email } = req.body
  // ❌ No property email if user send email in payload
  // ❌ also No validation before query.

  // ❌ No placeholder ?
  const query = `SELECT * FROM users WHERE email = ${email}`
  connection.query(query, (err, rows) => {
    if (err) throw err
    res.json({ data: rows })
  })
})

app.post('/users2', (req, res) => {
  const { email } = req.body
  // ❌ still No validation

  const query = `SELECT * FROM users WHERE email = ?`

  // ✅ use Placeholder
  connection.query(query, [email], (err, rows) => {
    if (err) throw err
    res.json({ data: rows })
  })
})

app.listen(3000, () => console.log('Server starting...'))

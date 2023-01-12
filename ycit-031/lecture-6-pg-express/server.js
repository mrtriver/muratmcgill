const { application } = require('express');
const {Client} = require('pg');
const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "password",
});
client.connect();


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3333, () => {
    console.log("Server is running on port 3333");
})
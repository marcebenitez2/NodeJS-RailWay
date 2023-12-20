import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM USERS");

  res.json(result[0]);
});
app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "HELLO WORLD" AS message`);
  res.json(result[0]);
});

app.get("/create", async (req, res) => {
  const [result] = await pool.query(
    `INSERT INTO USERS(name) VALUES ('Marcelo'),('Mariano'),('Lucas')`
  );
  res.json(result);
});

app.listen(PORT);
console.log("Server on port", 3000);

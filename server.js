const express = require("express");
const { DatabaseSync } = require("node:sqlite");
const path = require("node:path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Maak eerst je database met het commando in README.md.
// De database bevat nog geen tabellen totdat jij database.sql invult.
const db = new DatabaseSync(path.join(__dirname, "data", "project.db"));
db.exec("PRAGMA foreign_keys = ON;");

// Maak hieronder zelf je API-routes en SQL-query's.
// Gebruik de variabele db voor de databaseverbinding.

app.listen(port, () => {
    console.log(`Server draait op poort ${port}`);
});

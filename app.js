const express = require("express");
const app = express();
const port = 4000;

var placeholders = require("./placeholders");

app.get("/", (req, res) => res.json(placeholders));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

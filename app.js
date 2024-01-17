const express = require("express");
const connectDB = require("./config/database");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;

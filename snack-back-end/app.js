// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const snacksController = require("./controllers/snackController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// SNACK ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

// CONTROLLER
app.use("/snacks", snacksController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("404 Page Not Found!");
});

// EXPORT
module.exports = app;

// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const snacksController = require("./controllers/snackController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());

// ROUTES
app.use("/snacks", snacksController);

// EXPORT
module.exports = app;

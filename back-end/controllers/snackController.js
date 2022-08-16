const express = require("express");
const { getSnacks } = require("../queries/snacks");

const snacksController = express.Router();

snacksController.route("/").get(async (req, res) => {
  const results = await getSnacks();
  res.json(results);
});

module.exports = snacksController;

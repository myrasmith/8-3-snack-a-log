const db = require("../db/dbConfig.js");

const getSnacks = async () => {
  const results = await db.any("SELECT * FROM snacks");
  return results;
};

module.exports = {
  getSnacks,
};

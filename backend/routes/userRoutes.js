const express = require("express");

const router = express.Router();
router.post("/", (req, res) => {
  res.send("Register route");
});
module.exports = router;

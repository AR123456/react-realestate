const express = require("express");

const router = express.Router();
const { getNotes } = require("../controllers/noteController");
const { protect } = require("../middleware/authMiddleware");
// getNotes function coming from controller
router.route("/").get(protect, getNotes);

module.exports = router;

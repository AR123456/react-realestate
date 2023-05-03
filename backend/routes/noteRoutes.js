const express = require("express");
// mergeParams allows express to merge parameters from the parent router to the child router -- nested routes allows child router to access the params defined in the parent
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../controllers/noteController");
const { protect } = require("../middleware/authMiddleware");
// getNotes function coming from controller
router.route("/").get(protect, getNotes).post(protect, addNote);

module.exports = router;

// need some help from ticketRoutes  /api/tickets/:ticketId/notes

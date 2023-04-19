const express = require("express");

const router = express.Router();

const {
  getTickets,
  getTicket,
  createTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

// router.route is just a different syntax using it can chain to route
router.route("/").get(protect, getTickets).post(protect, createTicket);

router.route("/:id").get(protect, getTicket);

//TODO what about admins working tickets

module.exports = router;

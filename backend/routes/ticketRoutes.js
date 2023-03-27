const express = require("express");

const router = epxress.Router();

const {} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", createTicket);
router.get("/myTickets", viewTicket);
//TODO what about admins working tickets

module.exports = router;

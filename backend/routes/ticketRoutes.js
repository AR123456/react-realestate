const express = require("express");

const router = express.Router();

const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");
// Re - route into note router
// bring in the noteRouter part of merg params
const noteRouter = require("./noteRoutes");
router.use("/:ticketId/notes", noteRouter);
// router.route is just a different syntax using it can chain to route
router.route("/").get(protect, getTickets).post(protect, createTicket);

router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

//TODO what about admins working tickets

module.exports = router;

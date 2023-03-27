const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/TicketModel");

//@desc Get users tickets
//@route GET  /api/tickets/me
//@access Private

const getTickets = asyncHandler(async (req, res) => {
  // use middleware for protected routes

  res.status(200).json({ message: "getTickets" });
});
//@desc Create users tickets
//@route POST  /api/tickets/me
//@access Private

const createTicket = asyncHandler(async (req, res) => {
  // use middleware for protected routes

  res.status(200).json({ message: "createTicket" });
});

module.exports = {
  getTickets,
  createTicket,
};

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

//@desc Get users tickets
//@route GET  /api/tickets/me
//@access Private

const getTickets = asyncHandler(async (req, res) => {
  // get user using the id and the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const tickets = await Ticket.find({ user: req.user.id });
  res.status(200).json(tickets);
});

//@desc Get a ticket
//@route GET  /api/tickets/:id
//@access Private

const getTicket = asyncHandler(async (req, res) => {
  // get user using the id and the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  res.status(200).json(ticket);
});

//@desc Create users tickets
//@route POST  /api/tickets/me
//@access Private

const createTicket = asyncHandler(async (req, res) => {
  // other things could be sent here
  const { product, description } = req.body;
  // make sure we have the product and description
  if (!product || !description) {
    res.status(400);
    throw new Error("Must have a product and description of problem");
  }
  // get user using the id and the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // create ticket
  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "new",
  });
  // created
  res.status(201).json(ticket);
});
//@desc Delete ticket
//@route DELETE  /api/tickets/:id
//@access Private

const deleteTicket = asyncHandler(async (req, res) => {
  // get user using the id and the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  await ticket.remove();

  res.status(200).json({ success: true });
});
//@desc Updagte a ticket
//@route PUT  /api/tickets/:id
//@access Private

const updateTicket = asyncHandler(async (req, res) => {
  // get user using the id and the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedTicket);
});
module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
};

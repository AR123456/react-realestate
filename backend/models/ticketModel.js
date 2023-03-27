const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    // relationship to ticket
    user: {
      //link to users object ID

      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // which collection - schema ?
      ref: "User",
    },
    // what product is the ticket assocuated with
    product: {
      //
      type: String,
      required: [true, "Please select a product"],
      // enumerated value array of possible products
      enum: ["phone", "tablet", "printer", "monitor"],
    },
    description: {
      type: String,
      required: [true, "Please describe the problem"],
    },

    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Ticket", ticketSchema);

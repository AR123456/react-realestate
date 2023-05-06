const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    // relationship to ticket
    user: {
      //link to users object ID
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // which collection - schema ?
      ref: "User",
    },
    ticket: {
      //link to tickets object ID
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // which collection - schema ?
      ref: "Ticket",
    },
    text: {
      type: String,
      required: [true, "Please add some text "],
    },
    // is ticket from user or staff - TODO create staff portal
    isStaff: {
      type: Boolean,
      default: false,
    },
    isStaff: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Note", noteSchema);

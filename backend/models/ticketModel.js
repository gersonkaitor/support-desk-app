const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: [
        "Xiaomi 12",
        "Xiaomi 11",
        "Mi 11",
        "Mi 10",
        "Mi 9",
        "Xiaomi Smart Band 7",
        "Redmi Pad",
        "RedmiBook 15",
        "Mi True Wireless Earphones 2",
      ],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the issue"],
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

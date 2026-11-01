const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Name is required"] 
    },
    email: { 
      type: String, 
      required: [true, "Email is required"] 
    },
    subject: { type: String, default: "General Inquiry" },
    message: { 
      type: String, 
      required: [true, "Message is required"] 
    },
    isRead: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
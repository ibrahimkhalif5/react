const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Skill name is required"] 
    },
    category: { 
      type: String, 
      enum: ["Frontend", "Backend", "Database", "DevOps", "Tools"],
      required: true 
    },
    proficiencyLevel: { 
      type: String, 
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      default: "Intermediate"
    },
    icon: { type: String } // Icon name or SVG link
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: [true, "Project title is required"] 
    },
    description: { 
      type: String, 
      required: [true, "Project description is required"] 
    },
    techStack: [{ type: String }], // Array of technologies, e.g. ["React", "Express", "MongoDB"]
    image: { type: String }, // Image URL or path
    githubUrl: { type: String },
    liveDemoUrl: { type: String },
    featured: { type: Boolean, default: false } // For showcasing top projects on home page
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
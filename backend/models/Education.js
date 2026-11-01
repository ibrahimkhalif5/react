const mongoose = require("mongoose");
const EducationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: [true, "Institution is required"],
  },
  qualification: {
    type: String,
    required: [true, "qualification is required"],
  },
  fieldOfStudy: {
    type: String,
    required: [true, "Field of study is required"],
  },
    startDate: {
        type: Date,
        required: [true, "Start date is required"],
    },
    endDate: {
        type: Date,
        required: [true, "End date is required"],
    },
  description: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Education", EducationSchema);
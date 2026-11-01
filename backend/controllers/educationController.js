const Education = require("../models/Education");

// Get all education records
exports.getAllEducation = async (req, res) => {
  try {
    const educationRecords = await Education.find();
    res.status(200).json(educationRecords);
  } catch (error) {
    res.status(500).json({ message: "Error fetching education records" });
  }
};

// Get one education record by ID
exports.getEducationById = async (req, res) => {
  try {
    const educationRecord = await Education.findById(req.params.id);
    if (!educationRecord) {
      return res.status(404).json({ message: "Education record not found" });
    }
    res.status(200).json(educationRecord);
  } catch (error) {
    res.status(500).json({ message: "Error fetching education record" });
  }
};

// Create a new education record
exports.createEducation = async (req, res) => {
  try {
    const educationRecord = new Education(req.body);
    const savedEducationRecord = await educationRecord.save();
    res.status(201).json(savedEducationRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an education record by ID
exports.updateEducation = async (req, res) => {
  try {
    const educationRecord = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
        { new: true, runValidators: true }
    );
    if (!educationRecord) {
      return res.status(404).json({ message: "Education record not found" });
    }
    res.status(200).json(educationRecord);
  } catch (error) {
    res.status(400).json({ message: "Error updating education record" });
  }
};

// Delete an education record by ID
exports.deleteEducation = async (req, res) => {
  try {
    const educationRecord = await Education.findByIdAndDelete(req.params.id);
    if (!educationRecord) {
      return res.status(404).json({ message: "Education record not found" });
    }
    res.status(200).json({ message: "Education record deleted successfully" });
  }
    catch (error) {
    res.status(500).json({ message: "Error deleting education record" });
  }
}

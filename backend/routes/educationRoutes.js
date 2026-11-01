const Express = require("express");
const router = Express.Router();
const educationController = require("../controllers/educationController");

// GET all education entries
router.get("/", educationController.getAllEducation);

// GET one education entry by ID
router.get("/:id", educationController.getEducationById);

// POST a new education entry
router.post("/", educationController.createEducation);

// PUT an existing education entry by ID
router.put("/:id", educationController.updateEducation);

// DELETE an education entry by ID
router.delete("/:id", educationController.deleteEducation);

module.exports = router;
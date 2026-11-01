const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Route for /api/projects
// GET  /api/projects -> getProjects
// POST /api/projects -> createProject
router.route("/")
  .get(getProjects)
  .post(createProject)
  

// Route for /api/projects/:id
// GET    /api/projects/:id -> getProjectById
// PUT    /api/projects/:id -> updateProject
// DELETE /api/projects/:id -> deleteProject
router.route("/:id")
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;
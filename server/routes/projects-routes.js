const express = require("express");
const router = express.Router();

const {
    addProject,
    getAllProjects,
    deleteProject,
    updateProject,
} = require("../controllers/projects/projects-controller");

const { createProjectSchema, updateProjectSchema } = require("../controllers/projects/validationSchema");
const validate = require("../utility/validators");

router.get("/", getAllProjects);
router.post("/", validate(createProjectSchema), addProject);
router.delete("/", deleteProject);
router.put("/", validate(updateProjectSchema), updateProject);

module.exports = router;

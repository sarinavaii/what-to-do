const express = require("express");
const router = express.Router();

const { getAllTasks, addTask } = require("../controllers/tasks/tasks-controller");
const validate = require("../utility/validators");
const { createTaskSchema } = require("../controllers/tasks/validationSchema");

router.get("/:id", getAllTasks);
router.post("/", validate(createTaskSchema), addTask);

module.exports = router;

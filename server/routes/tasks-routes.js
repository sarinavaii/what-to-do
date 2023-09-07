const express = require("express");
const router = express.Router();

const { getAllTasks } = require("../controllers/tasks/tasks-controller");

router.get("/:id", getAllTasks);

module.exports = router;

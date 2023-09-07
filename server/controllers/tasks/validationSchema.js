const yup = require("yup");

const createTaskSchema = yup.object({
    body: yup.object({
        name: yup.string().max(255, "Task name is too long").required("Please enter your task name"),
        projectsId: yup
            .number()
            .integer("Project id is invalid")
            .required("Project id is required")
            .typeError("Project id is invalid"),
    }),
});

module.exports = { createTaskSchema };

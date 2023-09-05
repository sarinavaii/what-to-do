const yup = require("yup");

const createProjectSchema = yup.object({
    body: yup.object({
        name: yup.string().max(255, "Project name is too long").required("Please enter your project name"),
    }),
});

const updateProjectSchema = yup.object({
    body: yup.object({
        name: yup.string().max(255, "Project name is too long").required("Please enter your project name"),
        id: yup
            .number()
            .integer("Project id is invalid")
            .required("Project id is required")
            .typeError("Project id is invalid"),
    }),
});

module.exports = { createProjectSchema, updateProjectSchema };

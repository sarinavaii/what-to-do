const prisma = require("../../lib/prisma");

const getAllProjects = async (req, res) => {
    try {
        const projects = await prisma.projects.findMany({
            orderBy: {
                id: "asc",
            },
        });
        res.status(200).json({ message: "Items successfully fetched.", data: projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const addProject = async (req, res) => {
    try {
        const { name } = req.body;
        const project = await prisma.projects.create({
            data: {
                name,
            },
        });
        res.status(200).json({ message: "Item successfully added.", data: project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(404).json({ error: "Something went wrong" });
        }
        const existingRecord = await prisma.projects.findUnique({
            where: {
                id: +id,
            },
        });
        if (!existingRecord) {
            return res.status(404).json({ error: "Something went wrong" });
        }
        await prisma.projects.delete({
            where: {
                id: +id,
            },
        });
        res.status(200).json({ message: "Item successfully deleted." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id, name } = req.body;
        const existingRecord = await prisma.projects.findUnique({
            where: {
                id: +id,
            },
        });
        if (!existingRecord) {
            return res.status(404).json({ error: "Something went wrong" });
        }
        const project = await prisma.projects.update({
            where: {
                id: +id,
            },
            data: {
                name,
            },
        });
        res.status(200).json({ message: "Item successfully updated.", data: project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getAllProjects, addProject, deleteProject, updateProject };

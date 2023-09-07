const prisma = require("../../lib/prisma");

const getAllTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await prisma.projects.findUnique({
            where: {
                id: +id,
            },
            include: {
                tasks: true,
            },
        });
        res.status(200).json({ message: "Items successfully fetched.", data: project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const addTask = async (req, res) => {
    try {
        const { projectsId, name } = req.body;
        const existingRecord = await prisma.projects.findUnique({
            where: {
                id: +projectsId,
            },
        });
        if (!existingRecord) {
            return res.status(404).json({ error: "Something went wrong" });
        }
        const task = await prisma.tasks.create({
            data: {
                name,
                projectsId: +projectsId,
            },
        });
        res.status(200).json({ message: "Item successfully added.", data: task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getAllTasks, addTask };

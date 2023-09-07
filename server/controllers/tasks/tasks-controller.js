const prisma = require("../../lib/prisma");

const getAllTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const projects = await prisma.projects.findUnique({
            where: {
                id: +id,
            },
            include: {
                tasks: true,
            },
        });
        res.status(200).json({ message: "Items successfully fetched.", data: projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getAllTasks };

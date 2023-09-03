const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3030;

const prisma = new PrismaClient();

app.use(cors());

app.get("/get-projects", async (req, res) => {
    const projects = await prisma.projects.findMany();
    res.status(200).json({ message: "success", data: projects });
});

app.post("/add-project", async (req, res) => {
    const { name } = req.body;
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

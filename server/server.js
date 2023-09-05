const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3030;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
const projectsRoutes = require("./routes/projects-routes");

app.use("/projects", projectsRoutes);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

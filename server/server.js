const express = require("express");

const app = express();
const port = 3010;

app.get("/", (req, res) => {
    res.send("bruh");
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

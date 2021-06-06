const express = require("express");
const cors = require("cors");
const api = require("./api");

const app = express();

app.use(cors());

app.use("/api/v1/contacts", api.contacts);

app.use((_, res) => {
    res.status(404).json({ message: "Resourse not found" });
});

app.use((err, _, res, __) => {
    const { code = 500, message = "Server error" } = err;

    res.status(code).json({ message });
});

app.listen(3000, () => console.log("Server is running..."));

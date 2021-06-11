const express = require("express");
const cors = require("cors");
const { contactsRouter } = require("./api");

const app = express();

app.use(cors());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
    res.status(404).json({ message: "Resourse not found" });
});

app.use(({ statusCode, message }, _, res, __) => {
    res.status(statusCode || 500).json({ message });
});

// app.listen(3000, () => console.log("Server is running..."));

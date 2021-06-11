const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
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

const { PORT, DB_HOST } = process.env;

mongoose
    .connect(DB_HOST, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected");
        app.listen(PORT || 3000, () => console.log("Server is running..."));
    })
    .catch(({ message }) => console.log(`Init error: ${message}`));

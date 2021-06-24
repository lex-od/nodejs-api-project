const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const { contactsRouter, usersRouter } = require("./api");
const { apiConsts } = require("./helpers");

const { MULTER_FS_LIMIT } = apiConsts;

const app = express();

app.use(cors());

app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((_, res) => {
    res.status(404).json({ message: "Resourse not found" });
});

app.use(({ code, message, statusCode }, _, res, __) => {
    if (code === MULTER_FS_LIMIT) return res.status(400).json({ message });

    res.status(statusCode || 500).json({ message });
});

const { PORT, DB_HOST } = process.env;

mongoose
    .connect(DB_HOST, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() =>
        app.listen(PORT || 3000, () =>
            console.log("DB connected. Server is running...")
        )
    )
    .catch(({ message }) => {
        console.log(`Init error: ${message}`);
        process.exit(1);
    });

process.on("SIGINT", () =>
    mongoose.connection.close(() => {
        console.log("DB disconnected, server terminated.");
        process.exit(1);
    })
);

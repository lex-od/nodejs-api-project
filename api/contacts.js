const express = require("express");

const router = express.Router();

router.get("/", (_, res) => {
    res.json({ message: "hello" });
});

module.exports = router;

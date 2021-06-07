const express = require("express");
const { getAll, getOne, add } = require("../controllers/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", express.json(), add);

module.exports = router;

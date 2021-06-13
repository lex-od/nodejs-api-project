const express = require("express");
const {
    getAllContacts,
    getContact,
    addContact,
    removeContact,
    updateContact,
} = require("../controllers/contactsCtrl");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:id", getContact);

router.post("/", express.json(), addContact);

// router.delete("/:id", removeContact);

router.put("/:id", express.json(), updateContact);

module.exports = router;

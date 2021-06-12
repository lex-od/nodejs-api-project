const { ContactModel } = require("../models");

const getAllContacts = () => ContactModel.find();

const getContact = (id) => ContactModel.findById(id);

const addContact = (data) => ContactModel.create(data);

module.exports = {
    getAllContacts,
    getContact,
    addContact,
};

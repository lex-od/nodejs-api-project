const { ContactModel } = require("../models");

const getAllContacts = () => ContactModel.find();

const getContact = (id) => ContactModel.findById(id);

module.exports = {
    getAllContacts,
    getContact,
};

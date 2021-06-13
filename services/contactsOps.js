const { ContactModel } = require("../models");

const getAllContacts = () => ContactModel.find();

const getContact = (id) => ContactModel.findById(id);

const addContact = (data) => ContactModel.create(data);

const updateContact = (id, data) => {
    return ContactModel.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
    getAllContacts,
    getContact,
    addContact,
    updateContact,
};

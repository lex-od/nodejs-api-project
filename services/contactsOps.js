const { ContactModel } = require("../models");

const getAllContacts = () => ContactModel.find();

const getContact = (id) => ContactModel.findById(id);

const addContact = (data) => ContactModel.create(data);

const updateContact = (id, data) =>
    ContactModel.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
        overwrite: true,
    });

module.exports = {
    getAllContacts,
    getContact,
    addContact,
    updateContact,
};

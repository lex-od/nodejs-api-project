const { ContactModel } = require("../models");

const getAllContacts = () => ContactModel.find();

const getContact = (id) => ContactModel.findById(id);

const addContact = (data) => ContactModel.create(data);

const removeContact = (id) => ContactModel.findByIdAndDelete(id);

const updateContact = (id, data) =>
    ContactModel.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
        overwrite: true,
    });

const updateStatus = (id, data) =>
    ContactModel.findByIdAndUpdate(id, data, { new: true });

module.exports = {
    getAllContacts,
    getContact,
    addContact,
    updateContact,
    removeContact,
    updateStatus,
};

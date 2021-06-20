const { ContactModel } = require("../models");

const getAllContacts = (owner) => ContactModel.find({ owner });

const getContact = (_id, owner) => ContactModel.findOne({ _id, owner });

const addContact = (data) => ContactModel.create(data);

const removeContact = (_id, owner) =>
    ContactModel.findOneAndDelete({ _id, owner }, { projection: "-owner" });

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

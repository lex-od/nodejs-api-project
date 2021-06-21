const { ContactModel } = require("../models");

const getAllContacts = (owner) => ContactModel.find({ owner });

const getContact = (_id, owner) => ContactModel.findOne({ _id, owner });

const addContact = (data) => ContactModel.create(data);

const removeContact = (_id, owner) =>
    ContactModel.findOneAndDelete({ _id, owner }, { projection: "-owner" });

const updateContact = (_id, owner, data) =>
    ContactModel.findOneAndUpdate({ _id, owner }, data, {
        new: true,
        runValidators: true,
        overwrite: true,
        projection: "-owner",
    });

const updateFields = (_id, owner, data) =>
    ContactModel.findOneAndUpdate({ _id, owner }, data, {
        new: true,
        projection: "-owner",
    });

module.exports = {
    getAllContacts,
    getContact,
    addContact,
    updateContact,
    removeContact,
    updateFields,
};

const { ContactModel } = require("../models");

const getAllContacts = () => ContactModel.find();

module.exports = {
    getAllContacts,
};

const { model } = require("mongoose");
const { contactSchema } = require("./schemas");

const ContactModel = model("contact", contactSchema);

module.exports = ContactModel;

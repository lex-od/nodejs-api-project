const shortid = require("shortid");
const { jsonContacts: db, joiSchemas: joi } = require("../../services");

// const { error } = joi.newContact.validate({
//     name: "nn",
//     email: "a@b.com",
//     phone: "",
// });
// console.log(error);

const add = async ({ body }, res, next) => {
    try {
        console.log(body);
    } catch {
        next(new Error("Data access error"));
    }
};

module.exports = add;

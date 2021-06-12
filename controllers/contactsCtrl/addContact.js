const { contactsOps: ops } = require("../../services");

const addContact = async ({ body }, res, next) => {
    try {
        // const { error } = joi.newContact.validate(body);

        // if (error)
        //     return res
        //         .status(400)
        //         .json({ message: error.details?.[0]?.message });

        res.status(201).json({ result: await ops.addContact(body) });
    } catch (err) {
        console.log(err.name, err.message);

        next(new Error("Data access error"));
    }
};

module.exports = addContact;

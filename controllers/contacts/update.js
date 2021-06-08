const { jsonContacts: db, joiSchemas: joi } = require("../../services");

const update = async ({ params: { id }, body }, res, next) => {
    try {
        const { error } = joi.newContact.validate(body);

        if (error)
            return res
                .status(400)
                .json({ message: error.details?.[0]?.message });

        const contact = await db.updateContact(id, { phone: "", ...body });

        if (!contact)
            return res
                .status(404)
                .json({ message: "Contact with requested ID does not exist" });

        res.json(contact);
    } catch {
        next(new Error("Data access error"));
    }
};

module.exports = update;

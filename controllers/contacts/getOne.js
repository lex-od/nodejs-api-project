const { jsonContacts: db } = require("../../services");

const getOne = async (req, res, next) => {
    try {
        const contact = await db.getContactById(req.params.id);

        if (!contact) {
            const err = new Error("Contact with requested ID does not exist");
            err.code = 404;

            return next(err);
        }

        res.json({
            result: contact,
        });
    } catch {
        next(new Error("Data access error"));
    }
};

module.exports = getOne;

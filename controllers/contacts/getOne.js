const { jsonContacts: db } = require("../../services");

const getOne = async (req, res, next) => {
    try {
        const contact = await db.getContactById(req.params.id);

        if (!contact)
            return res
                .status(404)
                .json({ message: "Contact with requested ID does not exist" });

        res.json({
            result: contact,
        });
    } catch {
        next(new Error("Data access error"));
    }
};

module.exports = getOne;

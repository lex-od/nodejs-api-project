const { jsonContacts: db } = require("../../services");

const getAll = async (_, res, next) => {
    try {
        return res.json({ result: await db.getContacts() });
    } catch {
        next(new Error("Data access error"));
    }
};

module.exports = getAll;
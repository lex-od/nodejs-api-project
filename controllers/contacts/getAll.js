const { jsonContacts: db } = require("../../services");

const getAll = async (_, res) => res.json({ result: await db.getContacts() });

module.exports = getAll;

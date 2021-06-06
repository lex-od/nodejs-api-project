const { jsonContacts: db } = require("../../services");

const getAll = (_, res) => {
    res.json({
        result: "will be array of all contacts",
    });
};

module.exports = getAll;

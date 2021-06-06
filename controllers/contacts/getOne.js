const { jsonContacts: db } = require("../../services");

const getOne = async (req, res) => {
    res.json({
        result: "will be requested contact",
    });
};

module.exports = getOne;

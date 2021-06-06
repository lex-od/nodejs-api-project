const { jsonContacts: db } = require("../../services");

const getOne = (req, res) => {
    res.json({
        result: "will be requested contact",
    });
};

module.exports = getOne;

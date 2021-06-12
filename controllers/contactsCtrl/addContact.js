const { contactsOps: ops } = require("../../services");

const addContact = async ({ body }, res, next) => {
    try {
        res.status(201).json({ result: await ops.addContact(body) });
    } catch (err) {
        console.log(err.name, err.message);
        // 📌 Добавить обработчик ошибок валидации

        next(new Error("Data access error"));
    }
};

module.exports = addContact;

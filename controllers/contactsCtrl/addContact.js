// const { jsonContacts: db, joiSchemas: joi } = require("../../services");

// const add = async ({ body }, res, next) => {
//     try {
//         const { error } = joi.newContact.validate(body);

//         if (error)
//             return res
//                 .status(400)
//                 .json({ message: error.details?.[0]?.message });

//         res.status(201).json(await db.addContact({ phone: "", ...body }));
//     } catch {
//         next(new Error("Data access error"));
//     }
// };

// module.exports = add;

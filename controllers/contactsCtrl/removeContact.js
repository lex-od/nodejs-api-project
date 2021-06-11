// const { jsonContacts: db } = require("../../services");

// const del = async ({ params: { id } }, res, next) => {
//     try {
//         if (!(await db.removeContact(id)))
//             return res
//                 .status(404)
//                 .json({ message: "Contact with requested ID does not exist" });

//         res.json({
//             message: "Contact successfully deleted",
//         });
//     } catch {
//         next(new Error("Data access error"));
//     }
// };

// module.exports = del;

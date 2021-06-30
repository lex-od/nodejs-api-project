const { UserModel } = require("../models");

const getUser = (data) => UserModel.findOne(data);

const getUserById = (id) => UserModel.findById(id);

const addUser = ({ password, ...rest }) => {
    const user = new UserModel(rest);

    user.setPassword(password);

    return user.save();
};

const updateFieldById = (id, data) =>
    UserModel.findByIdAndUpdate(id, data, { new: true });

const updateFields = (filter, data) =>
    UserModel.findOneAndUpdate(filter, data, { new: true });

module.exports = {
    getUser,
    getUserById,
    addUser,
    updateFieldById,
    updateFields,
};

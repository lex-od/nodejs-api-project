const UserModel = require("../models");

const getUser = (data) => {
    return UserModel.findOne(data);
};

const getUserById = (id) => {
    return UserModel.findById(id);
};

const addUser = ({ password, ...rest }) => {
    const user = new UserModel(rest);
    user.setPassword(password);
    return user.save();
};

module.exports = {
    getUser,
    getUserById,
    addUser,
};

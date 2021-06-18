const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models");

const { TOKEN_KEY } = process.env;

const getUser = (data) => UserModel.findOne(data);

const getUserById = (id) => UserModel.findById(id);

const addUserWithToken = ({ password, ...rest }) => {
    const user = new UserModel(rest);

    user.setPassword(password);

    user.token = jwt.sign({ _id: user._id }, TOKEN_KEY);

    return user.save();
};

const updateUserById = (id, data) =>
    UserModel.findByIdAndUpdate(id, data, { new: true });

module.exports = {
    getUser,
    getUserById,
    addUserWithToken,
    updateUserById,
};

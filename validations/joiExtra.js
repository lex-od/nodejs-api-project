const Joi = require("joi");

const isEmail = (value) => !Joi.string().email().validate(value).error;

module.exports = {
    isEmail,
};

const { Schema } = require("mongoose");
const Joi = require("joi");

const isEmail = (value) => !Joi.string().email().validate(value).error;

const contactSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for contact"],
            cast: false,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },

        email: {
            type: String,
            required: true,
            cast: false,
            trim: true,
            lowercase: true,
            validate: [isEmail, "Invalid email"],
        },

        phone: {
            type: String,
        },

        favorite: {
            type: Boolean,
            default: false,
        },
    },
    { versionKey: false, timestamps: true }
);

module.exports = contactSchema;

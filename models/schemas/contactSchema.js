const { Schema, SchemaTypes } = require("mongoose");
const { joiExtra } = require("../../validations");
const { validationConsts } = require("../../helpers");

const { REQ_NAME, REQ_EMAIL, INV_EMAIL } = validationConsts;

const contactSchema = Schema(
    {
        name: {
            type: String,
            required: [true, REQ_NAME],
            cast: false,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },

        email: {
            type: String,
            required: [true, REQ_EMAIL],
            cast: false,
            trim: true,
            lowercase: true,
            validate: [joiExtra.isEmail, INV_EMAIL],
        },

        phone: {
            type: String,
            cast: false,
            trim: true,
            minlength: 7,
            maxlength: 20,
        },

        favorite: {
            type: Boolean,
            cast: false,
            default: false,
        },

        owner: {
            type: SchemaTypes.ObjectId,
            ref: "user",
            select: false,
        },
    }
    // { versionKey: false, timestamps: true }
);

module.exports = contactSchema;

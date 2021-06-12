const { Schema } = require("mongoose");

const contactSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for contact"],
            cast: false,
            minlength: 2,
            maxlength: 50,
        },

        email: {
            type: String,
            required: true,
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

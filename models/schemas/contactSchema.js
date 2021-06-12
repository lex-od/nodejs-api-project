const contactSchema = {
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },

    email: {
        type: String,
        required: [true, "Set email for contact"],
    },

    phone: {
        type: String,
    },

    favorite: {
        type: Boolean,
        default: false,
    },
};

module.exports = contactSchema;

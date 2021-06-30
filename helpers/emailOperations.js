const Mailgen = require("mailgen");
require("dotenv").config();

const { API_BASE_URL } = process.env;

const createBody = (verificationToken) => {
    const mailGen = new Mailgen({
        theme: "default",
        product: {
            name: "Contacts Api Service",
            link: "http://contactsapiservice.ua",
        },
    });

    const email = {
        body: {
            // name,
            intro: "Welcome to Contacts Api Service! We're very excited to have you on board.",
            action: {
                instructions:
                    "To get started with Contacts Api Service, please click here:",
                button: {
                    color: "#22BC66",
                    text: "Confirm your account",
                    link: `${API_BASE_URL}/api/users/verify/${verificationToken}`,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };

    return mailGen.generate(email);
};

module.exports = {};

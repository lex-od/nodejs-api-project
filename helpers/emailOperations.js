const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();

const { API_BASE_URL, METAUA_PASS } = process.env;

const mailGen = new Mailgen({
    theme: "default",
    product: {
        name: "Contacts Api Service",
        link: "http://contactsapiservice.ua",
    },
});

const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: { user: "fxzone@meta.ua", pass: METAUA_PASS },
});

const createBody = (verificationToken) => {
    const msg = {
        body: {
            name: "Guest",
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

    return mailGen.generate(msg);
};

const sendMail = (email, verificationToken) => {
    const msg = {
        from: "fxzone@meta.ua",
        to: email,
        subject: "Contacts Api Service Account Verification",
        html: createBody(verificationToken),
        // text: "",
    };

    return transporter.sendMail(msg);
};

module.exports = {
    sendMail,
};

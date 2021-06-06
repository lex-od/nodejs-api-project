const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

const getContacts = async () => JSON.parse(await fs.readFile(contactsPath));

const getContactById = async (contId) =>
    (await getContacts()).find(({ id }) => id === contId);

const removeContact = async (contId) => {
    const contacts = await getContacts();
    const newContacts = contacts.filter(({ id }) => id !== contId);

    if (contacts.length === newContacts.length) return false;

    await fs.writeFile(contactsPath, JSON.stringify(newContacts));

    return true;
};

const addContact = async (data) => {
    const contacts = await getContacts();

    contacts.push({ id: shortid(), ...data });

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

module.exports = {
    getContacts,
    getContactById,
    removeContact,
    addContact,
};

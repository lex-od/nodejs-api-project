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

    const newContact = { id: shortid(), ...data };
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return newContact;
};

const updateContact = async (contId, data) => {
    const contacts = await getContacts();
    const index = contacts.findIndex(({ id }) => id === contId);

    if (index === -1) return null;

    contacts[index] = { id: contId, ...data };
    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return contacts[index];
};

module.exports = {
    getContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};

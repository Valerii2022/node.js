const { readFile } = require("fs");
const fs = require("fs/promises");

const contactsPath = "./db/contacts.json";

async function listContacts() {
  //   const buffer = await fs.readFile(contactsPath);
  //   const contacts = buffer.toString();
  const contacts = await fs.readFile(contactsPath, "utf-8");
  console.log(contacts);
}

function getContactById(contactId) {
  console.log("get");
}

function removeContact(contactId) {
  console.log("remove");
}

function addContact(name, email, phone) {
  console.log("add");
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

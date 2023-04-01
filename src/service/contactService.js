const Contacts = require('../models/contactModel')

module.exports.getAllContacts = async () => {
    try {
        const contacts = await Contacts.find();
        return contacts;
    } catch (error) {
        console.log(`Error while fetching all contacts. Error - ${error.message}`);
    }
}

module.exports.getAllContactById = async (contactId) => {
    try {
        const contact = await Contacts.findById(contactId);
        return contact;
    } catch (error) {
        console.log(`Error while fetching contact. Error - ${error.message}`);
    }
}

/**
 * @desc create a new contact in the database
 * @param {*} contact 
 * @returns contact
 */
module.exports.createNewContact = async (contact) => {
    let contacts;
    try {
        const { name, email, phone } = contact;
        console.log(`Name: ${name} email: ${email} phone: ${phone}`);
        contacts = await Contacts.create({
            name, email, phone
        });
    } catch (error) {
        console.log(`Error while creating contact. Error - ${error.message}`);
    }
    return contacts;
}

module.exports.updateContact = async (contact, contactId) => {
    try {
        var contacts = await Contacts.findById(contactId);
        if (!contacts) {
            return null;
        }
        return await Contacts.findByIdAndUpdate(contactId, contact, { new: true });
    } catch (error) {
        console.log(`Error while updating contact. Error - ${error.message}`);
        throw new Error(error);
    }
}

module.exports.deleteContactById = async (contactId, res) => {
    try {
        var contacts = await Contacts.findById(contactId);
        if (!contacts) {
            res.status(500);
            throw new Error('Contact not found');
        }
        return await Contacts.findByIdAndDelete(contactId);
    } catch (error) {
        console.log(`Error while deleting contact. Error - ${error.message}`);
        res.status(500);
        throw new Error(error)
    }
}

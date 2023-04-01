const ContactService = require("../service/contactService");

/**
 * @desc Fetch all contacts details
 * @route GET /api/contacts
 * @param {*} req 
 * @param {*} res 
*/
const getContact = async (req, res) => {
    const contacts = await ContactService.getAllContacts();
    if (!contacts) {
        res.status(400);
        throw new Error('No contacts found');
    }
    res.status(200).json(contacts);
}
/**
 * @desc Get a single contact by its ID
 * @route GET /api/contacts/:id
 * @param {*} req 
 * @param {*} res 
 */
const getContactById = async (req, res) => {
    const contact = await ContactService.getAllContactById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error(`No contacts found for id ${req.params.id}`);
    }
    res.status(200).json(contact);
}
/**
 * @desc create a new contact
 * @route POST /api/contacts
 * @param {*} req 
 * @param {*} res 
 */
const createContact = async (req, res) => {
    const contact = await ContactService.createNewContact(req.body);
    if (!contact) {
        res.status(500);
        throw new Error("Contact creation failed");
    }
    res.status(201).json(contact);
}
/**
 * @desc Update contact by id
 * @route PUT /api/contacts/:id
 * @param {*} req 
 * @param {*} res 
 */
const updateContact = async (req, res) => {
    const contact = await ContactService.updateContact(req.body, req.params.id)
    res.status(200).json(contact);
}
/**
 * @desc Delete contact by id
 * @route DELETE /api/contacts/:id
 * @param {*} req 
 * @param {*} res 
 */
const deleteContact = async (req, res) => {
    const contact = await ContactService.deleteContactById(req.params.id, res)
    res.status(200).json(contact);
}

module.exports = { getContact, getContactById, createContact, updateContact, deleteContact };
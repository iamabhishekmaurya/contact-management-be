const express = require('express');
const router = express.Router();
const ContactController = require('../controller/contactController');

router.route("/").get(ContactController.getContact).post(ContactController.createContact);

router.route("/:id")
    .get(ContactController.getContactById)
    .put(ContactController.updateContact)
    .delete(ContactController.deleteContact);

module.exports = router;
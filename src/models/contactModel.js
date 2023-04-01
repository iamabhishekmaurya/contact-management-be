const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: 'string',
        distinct: true,
        required: [true, 'Contact name is required']
    },
    email: { type: 'string' },
    phone: { type: 'string', required: [true, 'Contact number is required'] },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Contacts', contactSchema);
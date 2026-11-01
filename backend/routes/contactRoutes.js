const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

// GET all contacts
router.get('/', contactController.getAllContacts);

// GET one contact by ID
router.get('/:id', contactController.getContactById);

// POST create contact
router.post('/', contactController.createContact);

// PUT update contact
router.put('/:id', contactController.updateContact);

// DELETE one contact
router.delete('/:id', contactController.deleteContact);

// DELETE all contacts
router.delete('/', contactController.deleteAllContacts);

module.exports = router;
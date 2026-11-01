const express = require('express');
const router = express.Router();
const protect  = require('../middleware/authMiddleware');

const userController = require('../controllers/userController');

// login user
router.post('/login', userController.loginUser);
// POST user logout
router.post('/logout', protect, userController.logoutUser);

// GET all users
router.get('/',protect, userController.getAllUsers);

// GET a single user by ID
router.get('/:id',protect, userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PUT (update) a user by ID
router.put('/:id',protect, userController.updateUser);


// DELETE a user by ID
router.delete('/:id', protect, userController.deleteUser);
// DELETE all users
router.delete('/',protect, userController.deleteAllUsers);

module.exports = router;

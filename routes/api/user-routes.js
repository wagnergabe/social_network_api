const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

module.exports = router;
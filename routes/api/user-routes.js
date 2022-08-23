const router = require('express').Router();

const {
    getAllUsers,
    GetUserById,
    CreateNewUser,
    UpdateUser,
    DeleteUser
} = require('../../controllers/user-controller')

module.exports = router;
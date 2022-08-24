const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

//Set up Get all and Posts at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createNewUser);

module.exports = router;
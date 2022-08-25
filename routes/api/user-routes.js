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

//Api for single id
router
    .route('/id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;
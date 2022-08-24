const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

//Get and Post routes

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)


module.exports = router;
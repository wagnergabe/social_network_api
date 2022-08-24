const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')


module.exports = router;
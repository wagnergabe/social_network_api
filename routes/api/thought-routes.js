const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

//Get and Post routes
//localhost:3001/api/thoughts
router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:userId')
    .post(createThought)
    
//localhost:3001/api/thoughts/id
router
    .route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

//localhost:3001/api/thoughts/thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

//localhost:3001/api/thoughts/thoughtId/reactionId

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;
const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// GET /api/thoughts
// GET METHOD
// get all thoughts
router.route('/').get(getThoughts).post(createThought);

module.exports = router;

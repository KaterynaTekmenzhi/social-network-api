// bringing in the express router
const router = require('express').Router();

// bringing in the api routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// using the api routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// exporting the router
module.exports = router;
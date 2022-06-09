// bringing in the express router
const router = require('express').Router();

// bringing in the api routes
const userRoutes = require('./userRoutes');

// using the api routes
router.use('/users', userRoutes);

// exporting the router
module.exports = router;
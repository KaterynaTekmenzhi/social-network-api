const router = require('express').Router();

// write the get api routes here
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// GET /api/users
// GET METHOD
// get all users
router.route('/').get(getUsers).post(createUser);

// GET /api/users/:id
// GET METHOD
// get a single user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/Users/:UserId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
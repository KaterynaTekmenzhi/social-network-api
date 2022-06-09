const { User, Thought } = require('../models');

module.exports = {
    // getUsers
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
    // getSingleUser
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) => 
                res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // createUser
    createUser(req, res) {
        User.create(req.body)
            .then(user => 
                res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // updateUser
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
        .then((user) =>
            !user
              ? res.json({ message: 'User not found' })
              : res.json(user))
        .catch(err => res.status(500).json(err));
    },
    // deleteUser
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) => 
            !user
              ? res.json({ message: 'User not found' })
              : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // addFriend
    addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $push: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        )
        .then((user) =>
            !user
              ? res.json({ message: 'User not found' })
              : res.json(user))
        .catch(err => res.status(500).json(err));
    },
    // deleteFriend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
        .then((user) =>
            !user
              ? res.json({ message: 'User not found' })
              : res.json(user))
        .catch(err => res.status(500).json(err));
    }
};
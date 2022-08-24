const { Thought, User } = require('../models');

const thoughtController = {
    //get all thoughts

    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        });
    },

    //get thought by ID

    //Create new thought (needs to be attached to user)
    createThought({ body }, res) {
        console.log(body)
        Thought.create(body)
            .then((dbThoughtData) => {    
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }   
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                console.log(dbUserData)
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
}

module.exports = thoughtController;
const { Thought, User } = require('../models');

const thoughtController = {
    //get all thoughts

    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        });
    },

    //get thought by ID
    getSingleThought({ params}, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        })
    },


    //Create new thought (needs to be attached to user)
    createThought({ body }, res) {
        console.log(body)
        Thought.create(body)
            .then((dbThoughtData) => {    
                return User.findOneAndUpdate(
                    {_id: params.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }   
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
}

module.exports = thoughtController;
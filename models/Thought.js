const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        //1-280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reaction: {
        //reactionschema
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
});

ThoughtSchema.virtual('reactionCount').get(function() {
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
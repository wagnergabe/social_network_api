const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        //Unique
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        //Unique?
        //match validation
    },
    thoughts: [],
    friends: []
},
{
    toJSON: {
        virtuals: true
    }
});

UserSchema.virtual('friendCount').get(function() {
})
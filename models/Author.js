const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: Date,
    dateOfDeath: Date,
    nationality: {
        type: String,
        required: true
    },
    biography: String
},{
    timestamps: true
})

const Author = mongoose.model('authors', authorSchema);

module.exports = Author;
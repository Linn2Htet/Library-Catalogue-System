const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    contact: String,
    status: String
}, {
    timestamps: true
})

const Student = mongoose.model('students', StudentSchema);

module.exports = Student;
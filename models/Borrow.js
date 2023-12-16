const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BorrowSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'students'
    },
    dateBorrow: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: 'books'
    },
    borrowStatus: String,
    dateReturn: Date
},{
    timestamps: true
})

const Borrow = mongoose.model('borrows', BorrowSchema);

module.exports = Borrow;
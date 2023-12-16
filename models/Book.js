const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'authors'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    catalogID: {
        type: String,
        unique: true
    },
    publicationYear: String,
    publisher: String,
    edition: String
},{
    timestamps: true
})

// Use a pre-save hook to generate and set the catalogID
BookSchema.pre('save', async function (next) {
    if (!this.catalogID) {
      const lastBook = await this.constructor.findOne({}, {}, { sort: { catalogID: -1 } });
      const lastCatalogID = lastBook ? lastBook.catalogID : '000000';
  
      // Increment and zero-pad the catalogID
      const nextCatalogID = String(Number(lastCatalogID) + 1).padStart(6, '0');
      this.catalogID = nextCatalogID;
    }
    next();
  });


const Book = mongoose.model('books', BookSchema);

module.exports = Book;
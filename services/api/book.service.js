const Book = require('../../models/Book');

let self;
function BookService(){
    self=this;
    self.Book = Book;
}

BookService.prototype = {
    list: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                var query = {};
                if(req.query.title) 
                    query = {
                        title: req.query.title
                    }
                if(req.query.categoryId)
                    query = {
                        categoryId: req.query.categoryId
                    }
                if(req.query.catalogID)
                    query = {
                        catalogID: req.query.catalogID
                    }
                let books = await self.Book.find(query).populate('authorId').populate('categoryId');
                console.log(books)
                if(books){
                    const data = books.map( book => {
                        return {
                            id: book._id,
                            title: book.title, 
                            isbn: book.isbn,
                            authorId: book.authorId,
                            categoryId: book.categoryId,
                            catalogID: book.catalogID,
                            publicationYear: book.publicationYear,
                            publisher: book.publisher,
                            edition: book.edition,
                            createdAt: book.createdAt,
                            updatedAt: book.updatedAt
                        }
                    })
                    resolve(data)
                }
            }catch(err){
                reject(err)
            }
        })
    },
    detail: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { id } = req.params;
                const book = await self.Book.findById(id).populate('authorId').populate('categoryId');
                if(book) 
                    resolve({
                        id: book._id,
                        title: book.title, 
                        isbn: book.isbn,
                        authorId: book.authorId,
                        categoryId: book.categoryId,
                        catalogID: book.catalogID,
                        publicationYear: book.publicationYear,
                        publisher: book.publicationYear,
                        edition: book.edition,
                        createdAt: book.createdAt,
                        updatedAt: book.updatedAt
                    })
            }catch(err){
                reject(err)
            }
        })
    },
    store : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { 
                    title, 
                    isbn, 
                    authorId, 
                    categoryId, 
                    publicationYear, 
                    publisher, 
                    edition 
                } = req.body;
                const book = await self.Book.create({
                    title, 
                    isbn, 
                    authorId, 
                    categoryId,
                    publicationYear, 
                    publisher, 
                    edition 
                })
                resolve({
                    id: book._id,
                    title: book.title, 
                    isbn: book.isbn,
                    authorId: book.authorId,
                    categoryId: book.categoryId,
                    catalogID: book.catalogID,
                    publicationYear: book.publicationYear,
                    publisher: book.publisher,
                    edition: book.edition,
                    createdAt: book.createdAt,
                    updatedAt: book.updatedAt
                })
            }catch(err){
                reject(err)
            }
        })
    },
    update: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { 
                    title, 
                    isbn, 
                    authorId, 
                    categoryId, 
                    publicationYear, 
                    publisher, 
                    edition 
                } = req.body;
                const book = await self.Book.findOneAndUpdate(
                    {
                        _id: req.params.id
                    },
                    {
                        title, 
                        isbn, 
                        authorId, 
                        categoryId, 
                        publicationYear, 
                        publisher, 
                        edition
                    },
                    {
                        new: true,
                        upsert: true,
                        rawResult: true // Return the raw result from the MongoDB driver
                      }
                )
                resolve(book)
            }catch(err){
                reject(err)
            }
        })
    },
    delete : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const bookId = req.params.id;
                await self.Book.deleteOne({_id: bookId});
                resolve(true)
            }catch(err){
                reject(err)
            }
        })
    }
}

module.exports = BookService;
const Author = require('../../models/Author');

let self;
function AuthorService(){
    self=this;
    self.Author = Author;
}

AuthorService.prototype = {
    
    list: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                let authors = await self.Author.find({});
                if(authors){
                    const data = authors.map( author => {
                        return {
                            id: author._id,
                            firstName: author.firstName, 
                            lastName: author.lastName,
                            dateOfBirth: author.dateOfBirth,
                            dateOfDead: author.dateOfDead,
                            nationality: author.nationality,
                            biography: author.biography,
                            createdAt: author.createdAt,
                            updatedAt: author.updatedAt
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
                const author = await self.Author.findById(id);
                if(author) 
                    resolve({
                        id: author._id,
                        firstName: author.firstName, 
                        lastName: author.lastName,
                        dateOfBirth: author.dateOfBirth,
                        dateOfDead: author.dateOfDead,
                        nationality: author.nationality,
                        biography: author.biography,
                        createdAt: author.createdAt,
                        updatedAt: author.updatedAt
                    })
            }catch(err){
                reject(err)
            }
        })
    },
    store : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { firstName, lastName, dateOfBirth, dateOfDead, nationality, biography } = req.body;
                const author = await self.Author.create({
                    firstName, 
                    lastName,
                    dateOfBirth,
                    dateOfDead,
                    nationality,
                    biography 
                })
                resolve({
                    id: author._id,
                    firstName: author.firstName, 
                    lastName: author.lastName,
                    dateOfBirth: author.dateOfBirth,
                    dateOfDead: author?.dateOfDead,
                    nationality: author.nationality,
                    biography: author.biography,
                    createdAt: author.createdAt,
                    updatedAt: author.updatedAt
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
                    firstName, 
                    lastName, 
                    dateOfBirth, 
                    dateOfDead, 
                    nationality, 
                    biography 
                } = req.body;
                const author = await self.Author.findOneAndUpdate(
                    {
                        _id: req.params.id
                    },
                    {
                        firstName, 
                        lastName,
                        dateOfBirth,
                        dateOfDead,
                        nationality,
                        biography
                    },
                    {
                        new: true,
                        upsert: true,
                        rawResult: true // Return the raw result from the MongoDB driver
                      }
                )
                resolve(author)
            }catch(err){
                reject(err)
            }
        })
    },
    delete : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const authorId = req.params.id;
                await self.Author.deleteOne({_id: authorId});
                resolve(true)
            }catch(err){
                reject(err)
            }
        })
    }
}

module.exports = AuthorService;
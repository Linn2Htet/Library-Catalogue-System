const Category = require('../../models/Category');

let self;
function CategoryService(){
    self=this;
    self.Category = Category;
}

CategoryService.prototype = {

    list: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                let categories = await self.Category.find({});
                if(categories){
                    const data = categories.map( category => {
                        return {
                            id: category._id,
                            name: category.name,
                            slug: category.slug,
                            description: category.description,
                            createdAt: category.createdAt,
                            updateAt: category.updatedAt
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
                const category = await self.Category.findById(id);
                console.log(category)
                if(category) 
                    resolve({
                        id: category._id,
                        name: category.name,
                        slug: category.slug,
                        description: category.description,
                        createdAt: category.createdAt,
                        updateAt: category.updatedAt
                    })
            }catch(err){
                reject(err)
            }
        })
    },
    store : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const category = await self.Category.create({
                    name: req.body.name,
                    slug: req.body.name.toLowerCase().replace(/\s+/g, '_'),
                    description: req.body.description
                })
                resolve({
                    id: category._id,
                    name: category.name,
                    slug: category.slug,
                    description: category.description,
                    createdAt: category.createdAt,
                    updatedAt: category.updatedAt
                })
            }catch(err){
                reject(err)
            }
        })
    },
    update: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { name, description } = req.body;
                const category = await self.Category.findOneAndUpdate(
                    {
                        _id: req.params.id
                    },
                    {
                        name: name,
                        slug: name.toLowerCase().replace(/\s+/g, '_'),
                        description: description
                    },
                    {
                        new: true,
                        upsert: true,
                        rawResult: true // Return the raw result from the MongoDB driver
                      }
                )
                resolve(category)
            }catch(err){
                reject(err)
            }
        })
    },
    delete : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const categoryId = req.params.id;
                await self.Category.deleteOne({_id: categoryId});
                resolve(true)
            }catch(err){
                reject(err)
            }
        })
    }
}

module.exports = CategoryService;
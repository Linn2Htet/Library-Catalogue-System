const Borrow = require('../../models/Borrow');

let self;
function BorrowService(){
    self=this;
    self.Borrow = Borrow;
}

BorrowService.prototype = {

    list: (req) => {
        return new Promise( async(resolve, reject)=> {
            try{
                let borrows = await self.Borrow.find({}).populate('bookId').populate('studentId');
                if(borrows){
                    const data = borrows.map( borrow => {
                        return {
                            id: borrow._id,
                            student: borrow.studentId, 
                            dateBorrow: borrow.dateBorrow,
                            dueDate: borrow.dueDate,
                            book: borrow.bookId,
                            borrowStatus: borrow.borrowStatus,
                            dateReturn: borrow.dateReturn,
                            createdAt: borrow.createdAt,
                            updatedAt: borrow.updatedAt
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
                const borrow = await self.Borrow.findById(id).populate('bookId').populate('studentId');
                if(borrow) 
                    resolve({
                        id: borrow._id,
                        student: borrow.studentId, 
                        dateBorrow: borrow.dateBorrow,
                        dueDate: borrow.dueDate,
                        book: borrow.bookId,
                        borrowStatus: borrow.borrowStatus,
                        dateReturn: borrow.dateReturn,
                        createdAt: borrow.createdAt,
                        updatedAt: borrow.updatedAt
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
                    studentId, 
                    dueDate,
                    bookId,
                } = req.body;
                const [day, month, year] = dueDate.split('-');
                const parsedDate = new Date(`${year}-${month}-${day}`)
                console.log(parsedDate)
                const borrow = await self.Borrow.create({
                    studentId, 
                    dateBorrow: new Date(),
                    dueDate : parsedDate,
                    bookId,
                    borrowStatus: "pending",
                    dateReturn: ""
                })
                resolve({
                    id: borrow._id,
                    student: borrow.studentId, 
                    dateBorrow: borrow.dateBorrow,
                    dueDate: borrow.dueDate,
                    book: borrow.bookId,
                    borrowStatus: borrow.borrowStatus,
                    dateReturn: borrow.dateReturn,
                    createdAt: borrow.createdAt,
                    updatedAt: borrow.updatedAt
                })
            }catch(err){
                reject(err)
            }
        })
    },

    borrowReturn : (req) => {
        return new Promise( async(resolve, reject) => {
            try{
                const borrow = await self.Borrow.findOneAndUpdate(
                    {
                        _id: req.body.borrowId
                    },
                    {
                        borrowStatus: "return",
                        dateReturn: new Date()
                    },
                    {
                        new: true,
                        upsert: true,
                        rawResult: true // Return the raw result from the MongoDB driver
                      }
                )
                resolve(borrow)
            }catch(err){
                reject(err)
            }
        })
    }

}

module.exports = BorrowService;
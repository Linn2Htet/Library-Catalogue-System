const Student = require('../../models/Student');

let self;
function StudentService(){
    self=this;
    self.Student = Student;
}

StudentService.prototype = {
    list: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                let students = await self.Student.find({});
                if(students){
                    const data = students.map( student => {
                        return {
                            id: student._id,
                            firstName: student.firstName, 
                            lastName: student.lastName,
                            gender: student.gender,
                            address: student.address,
                            contact: student.contact,
                            status: student.status,
                            createdAt: student.createdAt,
                            updatedAt: student.updatedAt
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
                const student = await self.Student.findById(id);
                if(student) 
                    resolve({
                        id: student._id,
                        firstName: student.firstName, 
                        lastName: student.lastName,
                        gender: student.gender,
                        address: student.address,
                        contact: student.contact,
                        status: student.status,
                        createdAt: student.createdAt,
                        updatedAt: student.updatedAt
                    })
            }catch(err){
                reject(err)
            }
        })
    },
    store : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { firstName, lastName, gender, address, contact, status } = req.body;
                const student = await self.Student.create({
                    firstName, 
                    lastName,
                    gender,
                    address,
                    contact,
                    status 
                })
                resolve({
                    id: student._id,
                    firstName: student.firstName, 
                    lastName: student.lastName,
                    gender: student.gender,
                    address: student.address,
                    contact: student.contact,
                    status: student.status,
                    createdAt: student.createdAt,
                    updatedAt: student.updatedAt
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
                    gender, 
                    address, 
                    contact, 
                    status
                } = req.body;
                const student = await self.Student.findOneAndUpdate(
                    {
                        _id: req.params.id
                    },
                    {
                        firstName, 
                        lastName, 
                        gender, 
                        address, 
                        contact, 
                        status
                    },
                    {
                        new: true,
                        upsert: true,
                        rawResult: true // Return the raw result from the MongoDB driver
                      }
                )
                resolve(student)
            }catch(err){
                reject(err)
            }
        })
    },
    delete : (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const studentId = req.params.id;
                await self.Student.deleteOne({_id: studentId});
                resolve(true)
            }catch(err){
                reject(err)
            }
        })
    }
}

module.exports = StudentService;
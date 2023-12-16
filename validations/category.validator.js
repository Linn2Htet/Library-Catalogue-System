const { check, validationResult } = require('express-validator');

module.exports = {
    storeRules: ()=>{
        return [
            check('name', 'Name field is required.').notEmpty(),
            check('description', 'Description field is required.').notEmpty()
        ]
    },
    updateRules: () => {
        return [
            check('name', 'Name field is required.').notEmpty(),
            check('description', 'Description field is required.').notEmpty()
        ]
    }
}
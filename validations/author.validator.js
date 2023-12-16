const { check, validationResult } = require('express-validator');

module.exports = {
    storeRules: ()=>{
        return [
            check('firstName', 'First name field is required.').notEmpty(),
            check('lastName', 'Last name field is required.').notEmpty(),
            check('nationality', 'Nationality field is required.').notEmpty()
        ]
    },
    updateRules: () => {
        return [
            check('firstName', 'First name field is required.').notEmpty(),
            check('lastName', 'Last name field is required.').notEmpty(),
            check('nationality', 'Nationality field is required.').notEmpty()
        ]
    }
}
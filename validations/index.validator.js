const { check, validationResult } = require('express-validator');

/** 
 * SEE DOCS VIA BELOW LINK
 * https://express-validator.github.io/docs/index.html
 * https://flaviocopes.com/express-validate-input/
 * 
*/

module.exports = {
    // Validation
    validate: (req, res, next) => {

        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
            return next();
        }
    
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push(err.msg))

        let uniqueErrors = extractedErrors.filter((value, index, self) =>  self.indexOf(value) === index)

        return res.status(200).json({
            status: 400,
            message: null,
            data: null,
            error: {
                errCode: 404,
                messages : uniqueErrors.join(",")
            }
        });
    }
}
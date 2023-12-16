const jwt = require('jsonwebtoken');

const jwtConfig = require('../configs/jwt.config');

let self;
function Jwt(){
    self=this;
    self.SECRET_KEY=jwtConfig.SECRET_KEY;
    self.EXPIRED_AT=jwtConfig.EXPIRED_AT;
    self.ISSUER=jwtConfig.ISSUER;
    self.TOKEN_NAME=jwtConfig.TOKEN_NAME;
}

Jwt.prototype = {
    generateToken: (payload= {}) => {
        console.log("generate token")
        if(Object.entries(payload).length === 0){
            payload = {
                name: self.TOKEN_NAME,
                issuedAt : Date()
            }
        }

        return new Promise((resolve, reject) => {
            const accessToken = jwt.sign(payload, self.SECRET_KEY, { expiresIn: self.EXPIRED_AT, issuer: self.ISSUER });
            resolve(accessToken)
        })
    },

    verifyToken: (token = "") => {
        return new Promise((resolve, reject) => {
            if (token && token != "") {  
                jwt.verify(token, self.SECRET_KEY, (err, decoded) => {
                    if(err) reject(err);
                    resolve(decoded);
                });
            }
            reject("No Token Found");
        })
    },
}

module.exports = Jwt;
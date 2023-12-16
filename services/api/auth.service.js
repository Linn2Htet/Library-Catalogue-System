const User = require('../../models/User');
const passwordHash = require('password-hash');
const Jwt = require('../../utils/jwt');

let self;
function AuthService(){
    self=this;
    self.User = User;
    self.jwt = new Jwt();
}

AuthService.prototype = {
    login: (req) => {
        return new Promise(async(resolve, reject) => {
            try{
                const { email, password } = req.body;
                let user = await self.User.findOne({ email : email});
                if(user){
                    let isPasswordCorrect = user && passwordHash.verify(password, user.password)? true: false;
                    if(isPasswordCorrect){
                        console.log("password correct")
                        let token = await self.jwt.generateToken({userId: user._id, username: user.username})
                        resolve({
                            userId: user._id,
                            username: user.username,
                            email: user.email,
                            token: token
                        })
                    }else{
                        reject("Password is incorrect.");
                    }
                }else{
                    reject("Email not found in our record.")
                }
            }catch(err){
                resolve(err)
            }
        })
    },
    refreshToken: (req) => {
        return new Promise(async(resolve, reject) => {
            console.log(req.cookies)
            if(req.cookies?.jwt){
                const accessToken = await self.jwt.refreshToken(req.cookies.jwt)
                resolve(accessToken)
            }else{
                reject("Unauthorized!")
            }
        })
    },
}

module.exports = AuthService;
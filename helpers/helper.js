const User = require('../models/User');

const passwordHash = require('password-hash');

const createAdmin = async () => {
    const admin = await User.findOne({email: 'admin@gmail.com'});
    if(admin) return;
    await User.create({
        username: 'Admin',
        email: 'admin@gmail.com',
        password: passwordHash.generate('password') //password is password
    })
}

module.exports = {
    createAdmin
}
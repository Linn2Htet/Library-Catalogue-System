const AuthService = require('../../services/api/auth.service');

const authService = new AuthService();

const login = (req, res, next) => authService.login(req)
    .then(response => {
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: 'Login successful.',
            data: response,
        })
    }).catch(err=>{
        res.status(500).json({
            statusCode: 500,
            success: false,
            message: "Login Error",
            error: err
        })
    })

module.exports = {
    login
}
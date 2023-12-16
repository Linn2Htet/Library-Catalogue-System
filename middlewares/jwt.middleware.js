const config = require('../configs/jwt.config');

const Jwt = require('../utils/jwt');

exports.checkToken = (req, res, next) => {
    let jwt = new Jwt();
	let token = req.headers['x-access-token'] || req.headers['authorization'] || ''; // Express headers are auto converted to lowercase

	if (token) {
		if (token.startsWith('Bearer ')) {
			token = token.slice(7, token.length);
		}
		jwt.verifyToken(token)
			.then(decoded => {
				req.token = decoded;
				next();
			})
			.catch(err => {
				console.log(err)
				return res.status(401).json({
					status: 401,
					message: null,
					data: null,
					error: err
				})
			});

	} else { 
		return res.json({
			status: 401,
			message: null,
			data: null,
			error: {
				errCode: 40101,
				message: "Token Not Found"
			}
		});
	}
}
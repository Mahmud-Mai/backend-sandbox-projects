const { UnauthenticatedError } = require("../errors")
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
    // check for header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startWith('Bearer ')){
        throw new UnauthenticatedError('Authentication invalid')
    }

    const token = authHeader.split(' ')[1]

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //attach user to job route
        req.user = {userId: payload.userId, name: payload.name}
    } catch( error ){
        throw new UnauthenticatedError('Authentication invalid')
    }

}

module.exports = auth
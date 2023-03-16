const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError } = require("../errors")

const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token })
}

const login = async (req, res) => {
    const {email, password} = req.body
    // check for email and pass
    if(!email || !password) {
     throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email})
    if(!password) {
        throw new UnauthenticatedError('wrong password')
    }
    const isPasswordCorrect = await user.comparePass(password)
    if(!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }

    // compare passwords
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.naem}, token})

}

module.exports = {
    login, register
}
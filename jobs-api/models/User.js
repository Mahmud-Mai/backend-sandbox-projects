const mongooge = require('mongoose')

 const UserSchema = new mongooge.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide email'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password btw 6 - 12 chars'],
        minLength: 4,
        maxLength: 12
    }
 })

 module.exports = mongoose.mode('User', UserSchema)
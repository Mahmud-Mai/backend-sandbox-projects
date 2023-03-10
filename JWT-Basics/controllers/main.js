const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
    const { username, password } = req.body

    if(!username || password) {
        throw new CustomAPIError('Provide email and password', 400)
    }
    console.log(username, password);
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    luckyNumber = Math.ceil(Math.random()*100)
    res.status(200).json({ msg:`Hello John Doe`, secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}

const login = async (req, req) => {
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    res.status(200).json({ msg:`Hello John Doe`, secret: `Here is your authorized data. Your lucky number is ${number}`})
}

module.exports = {
    login,
    dashboard
}
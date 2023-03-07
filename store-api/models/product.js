const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name is required']
    },
    price: {
        type: Number,
        required: [true, 'product price is required']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        dafault: 4.5
    },
    company: {
        type: String,
        enum: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported'
    }
})

module.exports = mongoose.model('Product', productsSchema)
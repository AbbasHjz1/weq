const mongoose = require('mongoose')


const menuSchema = mongoose.Schema({
    title: {
        type: String,
        required : [true,'Please ad a NAME']
    },
    category: {
        type: String,
        required : [true,'Please ad an email'],
    },
    price: {
        type: Number,
        required : [true,'Please ad a Password']
    },
    desc :{
        type: String,
        required: false
    },
    file : Object
},
{
    timestamps: true,
})

module.exports = mongoose.model('Menu', menuSchema)
const mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: [50, "Not more than 50 chars"]
    },
    price:{
        type: Number,
        required: true
    },
    Qty: {
        type: Number,
        required: true,
        trim: true
    }, 
},{
    timestamps: true
})
module.exports = mongoose.model("Product", ProductSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
description:{
    type: String,
    required: true
},
name:{
    type: String,
    required: true
},
productImage:{
    type: String,
},

price:{
    type: Number,
    default: 0,
},
stock:{
    type: Number,
    default:0
},
catgory:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
},
owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema)
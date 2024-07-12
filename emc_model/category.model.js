const mongoose = require("mongoose");

const catScheme = new mongoose.Schema({
name:{
    type: String,
    required: true
}
}, {timestamps: true});

export const Category = mongoose.model("Category", catScheme)
'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const makeupSchema = mongoose.Schema({
    name : {type: String, required: true},
    price: {type: Number, required: true ,},
    type : {type: String, enum : ['eyeliner' ,'lipstick','blush','foundation','eyeshadow']}
});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const makeupModel = mongoose.model('makeup', makeupSchema);
module.exports = makeupModel;
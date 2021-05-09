'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const disneySchema = mongoose.Schema({
    name : {type: String, required: true},
    gender: {type: String, required: true , enum : ['Male' ,'female']},
    movies : {type: Array}
});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const disneyModel = mongoose.model('disneyCharacter', disneySchema);


module.exports = disneyModel;
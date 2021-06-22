'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    task : {type: String, required: true},
    dificulty: {type: Number, required: true ,},
    assignee : {type: String, required: true},
    completed : {type: Boolean, default:false}

});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const todoModal = mongoose.model('todo', todoSchema);
module.exports = todoModal;
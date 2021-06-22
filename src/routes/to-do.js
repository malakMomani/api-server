'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const TodoTask = require('../models/data-collection-class.js');
const todoModal = require('../models/to-do.js');
let todoTask = new TodoTask(todoModal);

router.get('/task', getTask);
router.get('/task/:id', getOneTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


async function getTask(req, res) {
    //console.log(makeupItem);
    let tasks = await todoTask.get();
    res.status(200).json(tasks);   
}

async function getOneTask(req, res) {
    let id = parseInt(req.params.id); // from the url its a string
    let oneTask = await todoTask.get(id);
    res.status(200).json(oneTask);
}

async function createTask(req, res) {
    let obj = req.body;
    let newTask = await todoTask.create(obj);
    res.status(201).json(newTask);
}

async function updateTask(req, res) {
    let id = parseInt(req.params.id);
    const obj = req.body;
    let updatedTask = await todoTask.update(id,obj);
    res.status(200).json(updatedTask);
}

async function deleteTask(req, res) {
    let id = parseInt(req.params.id);
    let deleted = await todoTask.delete(id);
    res.status(200).json(deleted);

}

module.exports = router;
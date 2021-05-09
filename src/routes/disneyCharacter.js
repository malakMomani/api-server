'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const DisneyCharacter = require('../models/data-collection-class.js');
const disneyModel = require('../models/disneyCharacter')
let characterInstance = new DisneyCharacter(disneyModel);  


// add my RESTFUL APIs declarations
router.get('/character', getChar);
router.get('/character/:id', getOneChar);
router.post('/character', createChar);
router.put('/character/:id', updateitem);
router.delete('/character/:id', deleteitem);


async function getChar (req, res) {
    let items = await characterInstance.get();
    res.status(200).json(items);
   
}

async function getOneChar(req, res) {
    let id = parseInt(req.params.id); // from the url its a string
    let oneItem = await characterInstance.get(id);
    res.status(200).json(oneItem);
}

async function createChar(req, res) {
    let obj = req.body;
    let newItem = await characterInstance.create(obj);
    res.status(201).json(newItem);
}

async function updateitem(req, res) {
    let id = parseInt(req.params.id);
    const obj = req.body;
    let updatedCharacter = await characterInstance.update(id,obj);
    res.status(200).json(updatedCharacter);
}

async function deleteitem(req, res) {
    let id = parseInt(req.params.id);
    let deleted = await characterInstance.delete(id);
    res.status(200).json(deleted);

}

module.exports = router;
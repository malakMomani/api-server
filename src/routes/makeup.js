'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const MakeupItem = require('../models/data-collection-class.js');
const makeupModel = require('../models/makeup.js');
let makeupItem = new MakeupItem(makeupModel);

router.get('/item', getItem);
router.get('/item/:id', getOneItem);
router.post('/item', createItem);
router.put('/item/:id', updateitem);
router.delete('/item/:id', deleteitem);


async function getItem(req, res) {
    //console.log(makeupItem);
    let items = await makeupItem.get();
    res.status(200).json(items);   
}

async function getOneItem(req, res) {
    let id = parseInt(req.params.id); // from the url its a string
    let oneItem = await makeupItem.get(id);
    res.status(200).json(oneItem);
}

async function createItem(req, res) {
    let obj = req.body;
    let newItem = await makeupItem.create(obj);
    res.status(201).json(newItem);
}

async function updateitem(req, res) {
    let id = parseInt(req.params.id);
    const obj = req.body;
    let updatedCharacter = await makeupItem.update(id,obj);
    res.status(200).json(updatedCharacter);
}

async function deleteitem(req, res) {
    let id = parseInt(req.params.id);
    let deleted = await makeupItem.delete(id);
    res.status(200).json(deleted);

}

module.exports = router;
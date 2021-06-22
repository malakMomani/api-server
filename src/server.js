'use strict';

const mongoose = require('mongoose');
const express = require('express');
const notFoundHandler = require('../src/error-handlers/404.js');
const errorHandler = require('../src/error-handlers/500.js');
const logger = require('../src/middleware/logger.js');
const disneyRouter = require('./routes/disneyCharacter.js');
const makeupRouter = require('./routes/makeup.js');
const todoRouter = require('./routes/to-do.js');

const app = express();
app.use(express.json());

app.use(logger);

app.use(disneyRouter);
app.use(makeupRouter);
app.use(todoRouter);


app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Listening to PORT ${port}`));
}

function mongoConnect(MONGODB_URI) {
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(()=> console.log('conntected to mongoDB'))
    .catch((err)=> console.log(err));
    
}

module.exports = {
    app,
    start,
    mongoConnect
}
  
'use strict';

require('dotenv').config();
const server = require('./src/server.js');

const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI;
// start server
server.mongoConnect(MONGODB_URI);
server.start(PORT);

  

/** @format */
// express
const express = require('express');
const streamsRoutes = express.Router();
const streamController = require('../controllers/streams-controllers'); //  controller for streams
streamsRoutes.get('/', streamController.getStreams);

streamsRoutes.get('/:id', streamController.getStreamById);

streamsRoutes.post('/add', streamController.addStream);

streamsRoutes.patch('/update/:id', streamController.updateStream);

streamsRoutes.delete('/delete/:id', streamController.deleteStream);

module.exports = streamsRoutes;

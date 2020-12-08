/** @format */

const express = require('express');
const mongoose = require('mongoose');
const streamsRoutes = express.Router();
let Stream = require('../models/stream.model');

mongoose.connect('mongodb://127.0.0.1:27017/streams', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', function () {
	console.log('MongoDB database connection established successfully.');
});

streamsRoutes.route('/').get(function (req, res, next) {
	Stream.find((err, streams) => {
		if (err) {
			console.log(err);
		} else {
			res.json(streams);
		}
	});
});
//  get streamById - old
streamsRoutes.route('/:id').get(function (req, res, next) {
	let id = req.params.id;
	Stream.findById(id, function (err, stream) {
		res.json(stream);
	});
});

streamsRoutes.route('/add').post(function (req, res, next) {
	let stream = new Stream(req.body);
	stream
		.save()
		.then((stream) => {
			res.json({ stream: 'added successfully' });
		})
		.catch((err) => {
			res.status(400).send({ stream: 'adding failed' });
		});
});

streamsRoutes.route('/update/:id').patch(function (req, res, next) {
	Stream.findById(req.params.id, function (err, stream) {
		if (!stream) res.status(404).send({ stream: 'data is not found' });
		else stream.description = req.body.description;
		stream.id = req.body.id;
		stream.title = req.body.title;
		stream
			.save()
			.then((stream) => {
				res.json({ stream: 'Stream updated' });
			})
			.catch((err) => {
				res.status(400).send({ stream: 'Update not possible' });
			});
	});
});
streamsRoutes.route('/delete/:id').delete((req, res, next) => {
	Stream.findByIdAndDelete(req.params.id)
		.then(() => res.json({ stream: 'Stream deleted.' }))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = streamsRoutes;

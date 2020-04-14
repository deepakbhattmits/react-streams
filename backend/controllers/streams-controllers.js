/** @format */

const mongoose = require('mongoose');
let Stream = require('../models/stream.model');

mongoose.connect('mongodb://127.0.0.1:27017/streams', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', function () {
	console.log('MongoDB database connection established successfully');
});
const getStreams = (req, res, next) => {
	Stream.find((err, streams) => {
		if (err) {
			console.log(err);
		} else {
			res.json(streams);
		}
	});
};
const getstreamsById = (req, res, next) => {
	const id = req.params.id;
	Stream.findById(id, function (err, stream) {
		res.json(stream);
	});
};
const addStream = (req, res, next) => {
	const stream = new Stream(req.body);
	stream
		.save()
		.then((stream) => {
			res.json({ stream: 'added successfully' });
		})
		.catch((err) => {
			res.status(400).send({ stream: 'adding failed' });
		});
};
const updateStream = (req, res, next) => {
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
};
const deconsteStream = (req, res, next) => {
	Stream.findByIdAndDeconste(req.params.id)
		.then(() => res.json({ stream: 'Stream deconsted.' }))
		.catch((err) => res.status(400).json('Error: ' + err));
};
exports.getStreams = getStreams;
exports.getstreamsById = getstreamsById;
exports.addStream = addStream;
exports.updateStream = updateStream;
exports.deconsteStream = deconsteStream;

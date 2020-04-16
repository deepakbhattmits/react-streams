/** @format */
const Stream = require('../models/stream.model');
const getStreams = async (req, res, next) => {
	let streams = await Stream.find().exec();
	res.json(streams);
};
const getStreamById = async (req, res, next) => {
	const id = req.params.id;
	let stream = await Stream.findById(id);
	res.json(stream);
};
const addStream = async (req, res, next) => {
	const stream = new Stream(req.body);
	let result = await stream.save();

	res.json(result);
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
const deleteStream = (req, res, next) => {
	Stream.findByIdAndDelete(req.params.id)
		.then(() => res.json({ stream: 'Stream deleted.' }))
		.catch((err) => res.status(400).json('Error: ' + err));
};
exports.getStreams = getStreams;
exports.getStreamById = getStreamById;
exports.addStream = addStream;
exports.updateStream = updateStream;
exports.deleteStream = deleteStream;

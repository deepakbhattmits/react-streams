/** @format */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const streamsRoutes = express.Router();
const PORT = 5000;

let Stream = require('./models/stream.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/streams', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

streamsRoutes.route('/').get(function(req, res) {
	Stream.find((err, streams) => {
		if (err) {
			console.log(err);
		} else {
			res.json(streams);
		}
	});
});

streamsRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	Stream.findById(id, function(err, stream) {
		res.json(stream);
	});
});

streamsRoutes.route('/add').post(function(req, res) {
	let stream = new Stream(req.body);
	stream
		.save()
		.then(stream => {
			res.status(200).json({ stream: 'added successfully' });
		})
		.catch(err => {
			res.status(400).send('adding failed');
		});
});

streamsRoutes.route('/update/:id').patch(function(req, res) {
	Stream.findById(req.params.id, function(err, stream) {
		if (!stream) res.status(404).send('data is not found');
		else stream.description = req.body.description;
		stream.title = req.body.title;
		stream
			.save()
			.then(stream => {
				res.json('Stream updated');
			})
			.catch(err => {
				res.status(400).send('Update not possible');
			});
	});
});
streamsRoutes.route('/delete/:id').delete((req, res) => {
	Stream.findByIdAndDelete(req.params.id)
		.then(() => res.json('Stream deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

app.use('/streams', streamsRoutes);

app.listen(PORT, function() {
	console.log('Server is running on Port: ' + PORT);
});

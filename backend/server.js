/** @format */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = 5000;
const streamsRoutes = require('./routes/streams-routes');

app.use(cors()); // added for cors
app.use(bodyParser.json());
app.use('/streams', streamsRoutes);
mongoose
	.connect('mongodb://127.0.0.1:27017/streams', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, function () {
			console.log('Server is running on Port : ' + PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});

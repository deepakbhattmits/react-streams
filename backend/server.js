/** @format */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const streamsRoutes = require('./routes/streams-routes');

app.use(cors());
app.use(bodyParser.json());
app.use('/streams', streamsRoutes);
app.listen(PORT, function () {
	console.log('Server is running on Port: ' + PORT);
});

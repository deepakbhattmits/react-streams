/** @format */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//   model streamSchema
const streamSchema = new Schema({
	id: { type: String },
	title: { type: String, required: true },
	description: { type: String, require: true },
	userId: { type: String, required: true },
});

const Stream = mongoose.model('Stream', streamSchema);

module.exports = Stream;

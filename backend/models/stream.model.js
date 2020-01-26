/** @format */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const streamSchema = new Schema({
	title: { type: String },
	description: { type: String }
});

const Stream = mongoose.model('Stream', streamSchema);

module.exports = Stream;

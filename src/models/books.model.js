const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	cod: {
		type: Number,
		unique: true,
	},
	poster: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "authors",
	},
	publishing: {
		type: String,
		required: true,
	},
	plot: {
		type: String,
		required: true,
	},
	full_plot: {
		type: String,
		required: true,
	},
	genres: {
		type: String,
		required: true,
	},
	language: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	page_number: {
		type: Number,
		required: true,
	},
	technical: {
		type: Object,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const BooksModel = mongoose.model("books", schema);

module.exports = BooksModel;

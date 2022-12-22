const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	cod: { type: Number, unique: true },
	poster: { type: String, required: true },
	title: { type: String },
	author: { type: mongoose.Schema.Types.ObjectId, ref: "authors" },
	publishing: { type: String },
	plot: { type: String },
	full_plot: { type: String },
	genres: { type: String },
	language: { type: String },
	year: { type: Number },
	page_number: { type: Number },
	technical: { type: Object },
	createdAt: { type: Date, default: Date.now },
});

const BooksModel = mongoose.model("books", schema);

module.exports = BooksModel;

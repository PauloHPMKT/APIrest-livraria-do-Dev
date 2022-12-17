const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	cod: { type: Number, unique: true },
	title: String,
	poster: { type: String }, //rever metodo
	author: { type: mongoose.Schema.Types.ObjectId, ref: "authors" },
	publishing: String,
	plot: String,
	full_plot: String,
	genres: String,
	language: String,
	year: Number,
	pages_number: Number,
	technical: Object,
	createdAt: { type: Date, default: Date.now },
});

const BooksModel = mongoose.model("books", schema);

module.exports = BooksModel;

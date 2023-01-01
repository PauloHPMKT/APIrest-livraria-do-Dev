const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	nacionality: {
		type: String,
		required: true,
	},
	biography: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const AuthorsModel = mongoose.model("authors", schema);

module.exports = AuthorsModel;

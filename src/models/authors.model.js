const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	nacionality: String,
	biography: String,
});

const AuthorsModel = mongoose.model("authors", schema);

module.exports = AuthorsModel;

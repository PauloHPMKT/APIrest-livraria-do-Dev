const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	image_cover: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const UploadPosterModel = mongoose.model("posters", schema);

module.exports = {
	UploadPosterModel,
};

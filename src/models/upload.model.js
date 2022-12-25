const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	image_cover: {
		type: String,
		required: true,
	},
});

const UploadPosterModel = mongoose.model("posters", schema);

module.exports = {
	UploadPosterModel,
};

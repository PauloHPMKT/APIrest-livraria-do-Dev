const mongoose = require("mongoose");

const schemaUpload = new mongoose.Schema({
	image_cover: {
		type: String,
		required: true,
	},
});

const UploadPosterModel = mongoose.model("posters", schemaUpload);

module.exports = UploadPosterModel;

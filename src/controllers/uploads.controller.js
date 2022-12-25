const { UploadPosterModel } = require("../models/upload.model");

//create a cover upload
async function uploadCover(req, res) {
	const image_cover = req.file?.filename;

	const uploadPoster = await UploadPosterModel.create({
		image_cover,
	});

	res.json(uploadPoster);
}

//get a cover uploaded
async function getUploadCover(req, res) {
	const uploadCover = await UploadPosterModel.find();

	res.json(uploadCover);
}

module.exports = {
	uploadCover,
	getUploadCover,
};

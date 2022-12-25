const { UploadPosterModel } = require("../models/upload.model");

//create a cover upload
async function uploadCover(req, res) {
	const image_cover = req.file?.filename;

	const uploadCover = await UploadPosterModel.create({
		image_cover,
	});

	res.json(uploadCover);
}

//get a cover uploaded
async function getUploadCover(req, res) {
	const uploadedCover = await UploadPosterModel.find();

	res.json(uploadedCover);
}

module.exports = {
	uploadCover,
	getUploadCover,
};

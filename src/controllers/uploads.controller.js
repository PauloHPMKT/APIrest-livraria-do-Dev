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
	const { id } = req.params;
	const uploadedCover = await UploadPosterModel.findOne({ _id: id });
	// (err, file) => {
	// 	if (!file || file.length === 0) {
	// 		return res.status(404).json({ err: "No file exists" });
	// 	}

	// 	if (["image/jpeg", "image/jpg", "image/png"].includes(file.contentType)) {
	// 		const readStream = UploadPosterModel.createReadStream(file.filename);
	// 		readStream.pipe(res);
	// 	} else {
	// 		res.status(404).json({ err: "Not an image" });
	// 	}
	// }
	console.log(uploadedCover);
	res.json(uploadedCover);
}

module.exports = {
	uploadCover,
	getUploadCover,
};

const {
	httpStatusCode,
	throwNewError,
	successStatus,
} = require("../config/constants");
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

async function removeUpload(req, res) {
	const { id } = req.params;

	const uploadedExists = await UploadPosterModel.findById({ _id: id });

	if (!uploadedExists)
		res
			.status(httpStatusCode.BAD_REQUEST)
			.json({ message: throwNewError.RESOURCE_NOT_FOUND.message });

	const removeUploadedPoster = await UploadPosterModel.deleteOne({ _id: id });

	res.status(httpStatusCode.SUCCESS_NO_CONTENT).json({
		message: successStatus.REMOVED_RESOURCE.message,
		removeUploadedPoster,
	});
}

module.exports = {
	getUploadCover,
	uploadCover,
	removeUpload,
};

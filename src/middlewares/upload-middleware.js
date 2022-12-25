const multer = require("multer");
const path = require("path");

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.join(__dirname, "../..", "uploads"));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

module.exports = upload;

const router = require("./index");
const {
	getUploadCover,
	uploadCover,
	removeUpload,
} = require("../controllers/uploads.controller");
const upload = require("../middlewares/upload-middleware");

//rotas de upload de imagem
router.get("/books/upload/:id", getUploadCover);
router.post("/books/upload", upload.single("image"), uploadCover);
router.delete("/books/upload/:id", removeUpload);

module.exports = router;

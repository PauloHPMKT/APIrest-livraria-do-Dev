const router = require("./index");
const {
	getUploadCover,
	uploadCover,
} = require("../controllers/uploads.controller");
const upload = require("../middlewares/upload-middleware");

//rotas de upload de imagem
router.get("/books/upload", getUploadCover);
router.post("/books/upload", upload.single("image"), uploadCover);

module.exports = router;

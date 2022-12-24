const router = require("./index");
const {
	getBooks,
	//getBooksById,
	listBooksByPublishing,
	createBooks,
	uploadCover,
	updateBook,
	removeBook,
} = require("../controllers/books.controller");
const upload = require("../middlewares/upload-middleware");

router.get("/books/:id?", getBooks);
//router.get("/books/:id?", getBooksById);
router.get("/books/search", listBooksByPublishing); //caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.post("/books/create", createBooks);
router.post("/books/upload", upload.single("image"), uploadCover);
router.put("/books/:id", updateBook);
router.delete("/books/:id", removeBook);

module.exports = router;

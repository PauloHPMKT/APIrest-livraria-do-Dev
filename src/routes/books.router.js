const router = require("./index");
const {
	getBooks,
	getBooksById,
	listBooksByPublishing,
	createBooks,
	updateBook,
	removeBook,
} = require("../controllers/books.controller");
const upload = require("../middlewares/upload-middleware");

router.get("/books", getBooks);
router.get("/books/:id?", getBooksById);
router.get("/books/search", listBooksByPublishing); //caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.post("/books/create", upload.single("image"), createBooks);
router.put("/books/:id", updateBook);
router.delete("/books/:id", removeBook);

module.exports = router;

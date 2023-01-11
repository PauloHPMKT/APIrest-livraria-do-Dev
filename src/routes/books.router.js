const router = require("./index");
const {
	getBooks,
	//getBooksById,
	listBooksByPublishing,
	createBooks,
	updateBook,
	removeBook,
	getPaginatedBooks,
} = require("../controllers/books.controller");

router.get("/books/:id?", getBooks);
router.get("/books/paginated?", getPaginatedBooks);
router.get("/books/search", listBooksByPublishing); //caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.post("/books/create", createBooks);
router.put("/books/:id", updateBook);
router.delete("/books/:id", removeBook);
//router.get("/books/:id?", getBooksById);

module.exports = router;

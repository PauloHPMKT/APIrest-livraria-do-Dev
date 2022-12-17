const router = require("./index");
const BooksController = require("../controllers/books.controller");
const uploadFile = require("../middlewares/upload-middleware");

router.get("/", (req, res) => {
	res.send({ message: "rendizando diretor do arquivo routes" });
});

router.get("/books", BooksController.getBooks);
router.get("/books/:id?", BooksController.getBooksById);
router.get("/books/search", BooksController.listBooksByPublishing); //caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.post(
	"/books/create",
	uploadFile.single("poster"),
	BooksController.createBooks
);
router.put("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.removeBook);

module.exports = router;

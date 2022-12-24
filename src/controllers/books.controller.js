const {
	throwNewError,
	httpStatusCode,
	successStatus,
} = require("../config/constants");
const { BooksModel, UploadPosterModel } = require("../models/books.model");

function getBooks(req, res) {
	const { id } = req.params;
	const bookId = id ? { _id: id } : null;

	BooksModel.find(bookId)
		.populate("author poster", "name poster")
		.exec((err, books) => {
			if (err) {
				res
					.status(httpStatusCode.BAD_REQUEST)
					.json({ message: throwNewError.REQUEST_FAILED.message });
			} else {
				res.status(httpStatusCode.OK).json({ books });
			}
		});
}

/* funcao de busca por id - ajustes

async function getBooksById(req, res) {
	const { id } = req.params;

	await BooksModel.findById(id)
		.populate("author", "name") // popula os dados apenas pelo nome
		.exec((err, book) => {
			if (err)
				res
					.status(httpStatusCode.BAD_REQUEST)
					.json({ message: throwNewError.REQUEST_FAILED.message });
			else res.status(httpStatusCode.OK).send(book);
		});
}*/

//tentar resolver o bug da chave duplicada
async function createBooks(req, res) {
	const { ...data } = req.body;

	const bookExists = await BooksModel.findOne(data);

	console.log(bookExists);

	if (bookExists) {
		res
			.status(httpStatusCode.CONFLICT)
			.json({ error: throwNewError.DUPLICATED_UNIQUE_KEY.message });
	} else {
		const book = await BooksModel.create({
			...data,
			/*
			tratamento do json vindo de um multpart
			technical: data.technical ? JSON.parse(data.technical) : {},
			*/
		});

		return res
			.status(httpStatusCode.CREATED)
			.json({ book, message: successStatus.CREATED.message });
	}
}

async function uploadCover(req, res) {
	const poster = req.file?.filename;

	const uploadPoster = await UploadPosterModel.create({
		poster,
	});

	res.json(uploadPoster);
}

async function updateBook(req, res) {
	const { id } = req.params;

	const bookExists = await BooksModel.findById({ _id: id });

	if (!bookExists)
		res
			.sendStatus(httpStatusCode.BAD_REQUEST)
			.json({ message: throwNewError.RESOURCE_NOT_FOUND.message });

	const books = await BooksModel.findByIdAndUpdate({ _id: id }, req.body, {
		new: true,
	});

	res
		.status(httpStatusCode.SUCCESS_NO_CONTENT) //{ message: "livro atualizado", books });
		.json({ message: successStatus.UPDATED_RESOURCE.message, books });
}

async function removeBook(req, res) {
	const { id } = req.params;

	const remove = await BooksModel.deleteOne({ _id: id });

	res.send({ message: "livro excluido", remove });
}

async function listBooksByPublishing(req, res) {
	const publishing = req.query.editora;
	//caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
	BooksModel.find({ editora: publishing }, {}, (err, livros) => {
		res.status(200).send(livros);
	});
}

module.exports = {
	getBooks,
	//getBooksById,
	createBooks,
	uploadCover,
	updateBook,
	removeBook,
	listBooksByPublishing,
};

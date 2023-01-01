const {
	httpStatusCode,
	throwNewError,
	successStatus,
} = require("../config/constants");
const AuthorsModel = require("../models/authors.model");

async function getAuthors(req, res) {
	const { id } = req.params;
	const authorId = id ? { _id: id } : null;

	const author = await AuthorsModel.find(authorId).sort({ createdAt: -1 });

	if (author) {
		res.status(httpStatusCode.OK).json({ author });
	} else {
		// veirificar tratamento de erro caso a resposta seja === []
		res
			.status(httpStatusCode.BAD_REQUEST)
			.json({ message: throwNewError.REQUEST_FAILED.message });
	}
}

async function createAuthors(req, res) {
	const { ...data } = req.body;

	const authorExists = await AuthorsModel.findOne(data);

	if (authorExists) {
		res
			.status(httpStatusCode.CONFLICT)
			.json({ error: throwNewError.EXISTANT_REGISTER.message });
	} else {
		const author = await AuthorsModel.create({
			...data,
		});

		return res
			.status(httpStatusCode.CREATED)
			.json({ author, message: successStatus.CREATED.message });
	}
}

async function updateAuthors(req, res) {
	const { id } = req.params;

	const authors = await AuthorsModel.findByIdAndUpdate({ _id: id }, req.body, {
		new: true,
	});

	res.send({ message: "livro atualizado", authors });
}

async function removeAuthors(req, res) {
	const { id } = req.params;

	const remove = await AuthorsModel.deleteOne({ _id: id });

	res.send({ message: "autor excluido", remove });
}

module.exports = {
	getAuthors,
	createAuthors,
	updateAuthors,
	removeAuthors,
};

const {
	httpStatusCode,
	throwNewError,
	successStatus,
} = require("../config/constants");
const AuthorsModel = require("../models/authors.model");

async function getAuthors(req, res) {
	const { id } = req.params;
	const object = id ? { _id: id } : null;
	const author = await AuthorsModel.find(object);

	res.send(author);
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

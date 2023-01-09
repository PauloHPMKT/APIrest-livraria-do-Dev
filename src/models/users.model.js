const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: {
		type: "String",
		required: true,
	},
	nick_name: {
		type: "String",
		required: true,
	},
	sex: {
		type: "String",
		required: true,
	},
	email: {
		type: String,
		required: true,
		index: true,
	},
	password: {
		type: "String",
		required: true,
	},
	location: {
		address: {
			street: {
				type: "String",
				required: true,
			},
			city: {
				type: "String",
				required: true,
			},
			state: {
				type: "String",
				required: true,
			},
		},
	},
	createdAt: { type: Date, default: Date.now },
});

const UsersModel = mongoose.model("users", schema);

module.exports = UsersModel;

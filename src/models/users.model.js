const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	nick_name: "String",
	sex: String,
	email: String,
	password: String,
	location: {
		address: {
			street: String,
			city: String,
			state: String,
		},
	},
	createAt: { type: Date, default: Date.now },
});

const UsersModel = mongoose.model("users", schema);

module.exports = UsersModel;

//https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html - frontend

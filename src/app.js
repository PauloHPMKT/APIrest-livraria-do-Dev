require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const db = require("./db");
//const cors = require("cors");

//node instance
const app = express();

//routers imports
const booksRouter = require("./routes/books.router");
const authorsRouter = require("./routes/authors.router");
const usersRouter = require("./routes/users.router");
const sessionsRouter = require("./routes/sessions.router");
const storesRouter = require("./routes/store.router");
const uploadsRouter = require("./routes/upload.router");

//db connection
db.dbConnect();

//set morgan
app.use(morgan("dev"));

//set api
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
//app.use(cors());

//setting cors manually
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.setHeader("Content-Type", "multipart/form-data");

	next();
});

//routes
app.use("/api", booksRouter);
app.use("/api", authorsRouter);
app.use("/api", usersRouter);
app.use("/api", sessionsRouter);
app.use("/api", storesRouter);
app.use("/api", uploadsRouter);

module.exports = app;

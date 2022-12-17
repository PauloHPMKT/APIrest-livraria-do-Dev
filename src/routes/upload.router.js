const router = require("./index");

router.get("/upload", (req, res) => {
	res.send("testando rota");
});

module.exports = router;

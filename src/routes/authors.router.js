const router = require("./index");
const AuthorsController = require("../controllers/authors.controller");

router.get("/authors/:id?", AuthorsController.getAuthors);
router.post("/author/create", AuthorsController.createAuthors);
router.put("/autores/PUT/:id", AuthorsController.updateAuthors);
router.delete("/autores/DELETE/:id", AuthorsController.removeAuthors);

module.exports = router;

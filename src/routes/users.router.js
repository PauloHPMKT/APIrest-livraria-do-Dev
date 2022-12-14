const router = require("./index");
const UsersController = require("../controllers/users.controller");
const jwtAuthentication = require("../middlewares/auth-middleware");

router.get("/", (req, res) => {
	res.send({ message: "rendizando diretor do arquivo routes" });
});

router.get("/users:id?", UsersController.getUsers);
// url de paginacao: http://localhost:3005/api/users/paginated?page=#&limit=#
router.get("/users/paginated?", UsersController.getPaginatedUsers);
//caminho de busca por query: http://localhost:3000/api/livros/busca?editora=Buzz
router.get("/user/busca", UsersController.getUserByName);
router.post("/user/register", UsersController.createUser);
router.post("/usuariosauth", UsersController.login);
router.delete("/user/:id", UsersController.removeUser);

//rota provada para teste lembrar de bloquear rota com middleware
router.patch("/usuarios/:id", UsersController.updateUser);

module.exports = router;

const router = require("./index");
const StoreController = require("../controllers/stores.controller");

router.post("/store/register", StoreController.createStore);

module.exports = router;

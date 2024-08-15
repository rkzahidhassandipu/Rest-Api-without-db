const { getAllUsers, creatUser, updateUser, deleteUser } = require("../controllers/users.controller");

const router = require("express").Router();
// const router = express.Router();



router.get("/", getAllUsers);
router.post("/", creatUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
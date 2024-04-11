const express = require("express");
const UserController = require("../../controllers/user-controller.js");

const router = express.Router();

router.post("/signup", UserController.create);
router.get("/get/:id", UserController.get);
router.post("/signin", UserController.signIn);

module.exports = router;

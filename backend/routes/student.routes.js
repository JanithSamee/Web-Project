const { Router } = require("express");
const {
	login,
	register,
	profile,
} = require("../controller/student.controller");
const authenticateStudent = require("../middleware/student.middleware");

const studentRouter = Router();

studentRouter.post("/login", login);
studentRouter.post("/register", register);
studentRouter.get("/profile", authenticateStudent, profile);

module.exports = studentRouter;

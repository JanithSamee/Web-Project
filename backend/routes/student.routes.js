const { Router } = require("express");
const { login, register } = require("../controller/student.controller");

const studentRouter = Router();

studentRouter.post("/login", login);
studentRouter.post("/register", register);

module.exports = studentRouter;

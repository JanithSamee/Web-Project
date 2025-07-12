const { Router } = require("express");
const { testApp } = require("../controller/test.controller");

const testRouter = Router();

testRouter.get("/test", testApp);
testRouter.get("/db-test", testApp);

module.exports = testRouter;

const express = require("express");
const testRouter = require("./routes/test.routes");

const app = express();

app.use(testRouter);

app.listen(5500, () => console.log("Server Running"));

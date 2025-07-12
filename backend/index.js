require("dotenv").config();
require("./db/connect");
const express = require("express");
const testRouter = require("./routes/test.routes");

const app = express();

app.use("/test", testRouter);
app.use("/student", testRouter);
app.use("/admin", testRouter);
app.use("/enroll", testRouter);

app.listen(5500, () => console.log("Server Running"));

require("dotenv").config();
require("./db/connect");
const express = require("express");
const testRouter = require("./routes/test.routes");
const studentRouter = require("./routes/student.routes");

const app = express();

app.use(express.json());

app.use("/test", testRouter);
app.use("/student", studentRouter);

app.listen(5500, () => console.log("Server Running"));

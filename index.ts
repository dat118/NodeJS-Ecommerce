const express = require("express");
const dotenv = require("dotenv");
import bodyParser from "body-parser";
import { dbConnect } from "./config/dbConnect";
import { authRouter } from "./routes/authRoute";
import { ErrorHandler, NotFound } from "./middlewares/errorHandler";
const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(NotFound);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log("server is running");
});

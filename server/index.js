const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const signUpRoute = require("./routes/AuthRoute.routes")
require("dotenv").config();
const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(cookieParser());
mongoose
  .connect(process.env.MONGODB_CONNECTION_URI)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/",signUpRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

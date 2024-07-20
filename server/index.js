const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const signUpRoute = require("./routes/AuthRoute.routes")
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
};


mongoose
  .connect(process.env.MONGODB_CONNECTION_URI)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());



app.use("/",signUpRoute)


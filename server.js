const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

//ExpressJS
const app = express();

const crtStudentsRoute = require("./routes/crtstudents");

//MongoDB Connect
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => console.log("Connected to DB!")
);

app.use(cors());
app.use(express.json());

app.use("/api/students", crtStudentsRoute);

app.listen(3000, () => console.log("Server Up and Running at port"));

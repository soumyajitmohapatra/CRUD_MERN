import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());


import userRoutes from "./routes/user.route.js"


app.use('/',userRoutes)

// DATABASE CONNECTION 
import mongoose from "mongoose";

const url =
  "mongodb://localhost:27017/demoDB?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", (err) => {
  if (!err) {
    console.log("Connected to Db");
  } else {
    console.log(err);
  }
});




app.listen(3001, () => {
  console.log("Server is running on port 3001");
});





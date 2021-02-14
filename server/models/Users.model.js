import mongoose  from "mongoose";

// const user = require("../routes/user.route");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const usersModel = mongoose.model("users", userSchema);

export default usersModel;


















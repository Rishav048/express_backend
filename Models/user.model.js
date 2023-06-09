const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = {
  UserModel,
};

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const { UserModel } = require("../Models/user.model");

// Register

userRouter.post("/register", async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({
        name,
        email,
        password: hash,
        isAdmin,
      });
      await user.save();
      res.send("User Successfully Registered...!");
      console.log("User Registered");
    });
  } catch (e) {
    res.send("Error occured while registering...!", e);
    console.log("Error", e);
  }
});

// Login

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "library");
          res.send({ msg: "Login successfull", token: token });
          console.log("Login Successfull");
        } else {
          res.send({ msg: "Wrong Credentials...!" });
          console.log("Wrong Credentials");
        }
      });
    }
  } catch (e) {
    res.send("Login Failed.....!");
    console.log("Login Failed..", e);
  }
});

module.exports = {
  userRouter,
};

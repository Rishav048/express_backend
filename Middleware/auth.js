const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    next();
  } else {
    res.send("Sorry...You are not Autherized...!");
  }
};

const authAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (token && req.body.isAdmin === true) {
    next();
  } else {
    res.send("Sorry...You are not Autherized...!");
  }
};

module.exports = {
  auth,
  authAdmin,
};

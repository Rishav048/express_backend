const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://rishav:rishav@cluster0.3vubuhl.mongodb.net/library?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};

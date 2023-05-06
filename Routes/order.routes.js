const express = require("express");
const orderRouter = express.Router();
//const { OrderModel } = require("../Models/order.model");
const { BookModel } = require("../Models/book.model");

// Post a Order;
// orderRouter.post("/", async (req, res) => {
//   const bookPresent = await BookModel.find(req.body);
//   console.log("bookPresent", bookPresent);
//   try {
//     if (bookPresent.length > 0) {
//       const book = new OrderModel(bookPresent[0]);
//       await book.save();
//       res.send("Order Success....!");
//       console.log("Order Done..");
//     }
//   } catch (e) {
//     res.send("POST req failed ...!");
//     console.log("POST req failed..!");
//   }
// });

module.exports = {
  orderRouter,
};

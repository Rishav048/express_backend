const express = require("express");
const booksRouter = express.Router();
const { BookModel } = require("../Models/book.model");

// Getting all the Books
booksRouter.get("/", async (req, res) => {
  let query = req.query;
  console.log("query", query);
  try {
    const allbook = await BookModel.find(query);
    res.send(allbook);
    console.log("ALL BOOKS..");
  } catch (e) {
    res.send("GET req failed ...!");
    console.log("GET req failed..!");
  }
});

// Getting Specific Book
booksRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const onebook = await BookModel.find({ _id: id });
    res.send(onebook);
    console.log("One book..");
  } catch (e) {
    res.send("GET req failed ...!");
    console.log("GET req failed..!");
  }
});

//************** */ PROTECTED ROUTES  ********************
// Post a book;
booksRouter.post("/", async (req, res) => {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.send("Book Successfully added ....!");
    console.log("Book Added..");
  } catch (e) {
    res.send("POST req failed ...!");
    console.log("POST req failed..!");
  }
});

// Update a Specific Book
booksRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await BookModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Book Details Updataed...!");
    console.log("Updated Successfully..");
  } catch (e) {
    res.send("PATCH req failed ...!");
    console.log("PATCH req failed..!");
  }
});

// Delete a Specific Book
booksRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await BookModel.findByIdAndDelete({ _id: id });
    res.send("Book Details Deleted...!");
    console.log("Deleted Successfully..");
  } catch (e) {
    res.send("DELETE req failed ...!");
    console.log("DELETE req failed..!");
  }
});

module.exports = {
  booksRouter,
};

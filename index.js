const express = require("express");
const cors = require("cors");
const { userRouter } = require("./Routes/user.routes");
const { booksRouter } = require("./Routes/book.routes");
const { auth, authAdmin } = require("./Middleware/auth");
//const { orderRouter } = require("./Routes/order.routes");
const { connection } = require("./db");
const PORT = 8080;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.use("/api", userRouter);

app.use("/api/books", booksRouter);
//app.use("/api/order", orderRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (e) {
    console.log("Cannot connect to DB", e);
  }

  console.log("Server is running at PORT:", PORT);
});

module.exports = {
  app,
};

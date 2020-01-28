const express = require("express");
const app = express();
const parser = require("body-parser");
var cors = require('cors')

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors())

const restaurantController = require("./controllers/restaurantController");
const reviewController = require("./controllers/reviewController");

app.use("/restaurants", restaurantController);
app.use("/reviews", reviewController);

app.get("/", (req, res) => {
  res.send("hitting default route");
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  rating: Number,
  text: String,
  restaurant: 
    {
      ref: "Restaurant",
      type: mongoose.Schema.Types.ObjectId
    }
  ,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

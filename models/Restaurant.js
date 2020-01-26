const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const restaurantSchema = mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  postal_code: Number,
  stars: Number,
  review_count: Number,
  reviews: [
    {
      ref: "Review",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  categories: [
    {
      type: String
    }
  ],
  images: String
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;

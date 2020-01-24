const mongoose = require("../db/connection")

const restaurantSchema = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: Number,
    stars: Number,
    review_count: Number,
    categories: [{
        type: String
    }]
});

const restaurant = mongoose.model("restaurant", restaurantSchema)

module.exports = restaurant;
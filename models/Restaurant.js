const mongoose = require("../db/connection")
const Schema = mongoose.Schema

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

const Restaurant = mongoose.mode('Restaurant', restaurantSchema)


module.exports = restaurant;
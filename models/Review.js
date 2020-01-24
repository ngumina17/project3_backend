const mongoose = require("../db/connection")

const reviewSchema = mongoose.Schema ({
    rating: Number,
    text: String,

})

const review = mongoose.model("review", reviewSchema)

module.exports = review
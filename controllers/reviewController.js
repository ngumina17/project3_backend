const express = require("express");
const router = express.Router();
const review = require("../models/Review");

router.get("/", (req, res) => {
    review.find({}).then(reviews => res.json(reviews))
})


module.exports = router;

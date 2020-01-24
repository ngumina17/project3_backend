const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/reviews", (req, res) => {
  Review.find({}).then(res => res.json());
});

module.exports = router;

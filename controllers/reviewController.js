const express = require("express");
const router = express.Router();
const review = require("../models/Review");

router.get("/", (req, res) => {
  review.find({}).then(reviews => res.json(reviews));
});

router.get("/:id", (req, res) => {
  review.findOne({ _id: req.params.id }).then(review => res.json(review));
});

router.post("/", (req, res) => {
  review.create(req.body).then(review => {
    res.json(review);
  });
});


module.exports = router;

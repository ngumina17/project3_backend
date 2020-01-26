const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.get("/", (req, res) => {
  Review.find({}).then(reviews => res.json(reviews));
});

router.get("/:id", (req, res) => {
  Review.findOne({ _id: req.params.id }).then(review => res.json(review));
});

router.post("/", (req, res) => {
  Review.create(req.body).then(review => {
    res.json(review);
  });
});

router.put("/:id", (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(review => {
    res.json(review);
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Review.findOneAndDelete({ _id: id }).then(() => {
    Review.find({}).then(reviews => res.json(reviews));
  });
});

module.exports = router;

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

router.put("/:id", (req, res) => {
  let updateReview = req.body
  let id = req.params.id
  review
    .findOneAndUpdate({ _id: id }, updateReview, { new: true })
    .then(() => {
      review.find({}).then(reviews => res.json(reviews));
    });
});



router.delete("/:id", (req, res) => {
  let id = req.params.id
  review.findOneAndDelete({_id: id }).then(() => {
      review.find({}).then(reviews => res.json(reviews))
  })
})


module.exports = router;

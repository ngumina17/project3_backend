const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/", (req, res) => {
  Restaurant.find({}).then(restaurants => res.json(restaurants));
});

router.get("/:id", (req, res) => {
  Restaurant.findOne({ _id: req.params.id }).then(restaurant =>
    res.json(restaurant)
  );
});

router.get("/name/:name", (req, res) => {
  Restaurant.findOne({ name: req.params.name }).then(restaurant =>
    res.json(restaurant)
  );
});

router.get("/city/:city", (req, res) => {
  Restaurant.findOne({ city: req.params.city }).then(restaurant =>
    res.json(restaurant)
  );
});

router.post("/", (req, res) => {
  let newRestaurant = req.body;
  Restaurant.create(newRestaurant)
    .then(Restaurant.find({}))
    .then(restaurants => res.json(restaurants));
});

router.put("/:id", (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(restaurant => {
    res.json(restaurant);
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Restaurant.findOneAndDelete({ _id: id }).then(() => {
    Restaurant.find({}).then(restaurants => res.json(restaurants));
  });
});

module.exports = router;

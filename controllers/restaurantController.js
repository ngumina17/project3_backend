const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const Review = require('../models/Review')

router.get("/", (req, res) => {
  Restaurant.find({}).then(restaurants => res.json(restaurants));
});

router.options("/", (req, res) => {
  Restaurant.find({}).then(restaurants => res.json(restaurants));
});

router.get("/:id", (req, res) => {
  Restaurant.findOne({ _id: req.params.id }).then(restaurant =>
    res.json(restaurant)
  );
});

router.get("/name/:name", (req, res) => {
  let newName = req.params.name;
  Restaurant.findOne({
    name: { $regex: new RegExp(newName, "i") }
  }).then(restaurant => res.json(restaurant));
});

router.get("/city/:city", (req, res) => {
  let searchCity = req.params.city;
  Restaurant.findOne({
    city: { $regex: new RegExp(searchCity, "i") }
  }).then(restaurant => res.json(restaurant));
});

router.get("/zip/:zip", (req, res) => {
  let searchZip = req.params.postal_code;
  Restaurant.findOne({
    zip: searchZip
  }).then(restaurant => res.json(restaurant));
});

router.post("/", (req, res) => {
  let newRestaurant = req.body;
  Restaurant.create(newRestaurant)
    .then(Restaurant.find({}))
    .then(restaurants => res.json(restaurants));
});




router.put("/:id", (req, res) => {

      const newReview = req.body
 
      const restaurant = req.params.id
      console.log(restaurant)
  
        Restaurant.find({_id: restaurant}).then(restaurants => {
            
            Review.create(newReview).then(reviews => {
                restaurants[0].reviews.push(reviews._id)
                reviews.restaurant = restaurants._id
                reviews.save()
                restaurants[0].save()
                res.json(restaurants)

      })
    });
})


router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Restaurant.findOneAndDelete({ _id: id }).then(() => {
    Restaurant.find({}).then(restaurants => res.json(restaurants));
  });
});

module.exports = router;

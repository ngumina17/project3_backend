const express = require("express")
const router = express.Router()
const restaurant = require('../models/Restaurant')

router.get("/", (req, res) => {
    restaurant.find({}).then(restaurants => res.json(restaurants))
})

// router.get("/:id", (req, res) => {
//     restaurant.find({_id: req.params.id}).then(restaurants => res.json(restaurants))
// })

router.post("/", (req, res) => {
    let newRestaurant = req.body;
    restaurant.create(newRestaurant).then(restaurant.find({})).then(restaurants => res.json(restaurants))
})

router.put("/:id", (req, res) => {
  let updateRestaurant = req.body
  let id = req.params.id
  restaurant
    .findOneAndUpdate({ _id: id }, updateRestaurant, { new: true })
    .then(() => {
      restaurant.find({}).then(restaurants => res.json(restaurants));
    });
});

router.delete("/:id", (req, res) => {
    let id = req.params.id
    restaurant.findOneAndDelete({_id: id }).then(() => {
        restaurant.find({}).then(restaurants => res.json(restaurants))
    })
})



module.exports = router;
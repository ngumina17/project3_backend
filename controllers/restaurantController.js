const express = require("express")
const router = express.Router()
const restaurant = require('../models/Restaurant')

router.get("/", (req, res) => {
    restaurant.find({}).then(restaurants => res.json(restaurants))
})

module.exports = router

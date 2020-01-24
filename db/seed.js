const mongoose = require('./connection')
const restaurant = require('../models/Restaurant')
const review = require('../models/Review')
const restaurantSeedData = require('./restaurantSeedData')
const reviewSeedData = require('./reviewSeedData')

restaurant.deleteMany({}).then(() => {
    restaurant.collection.insert(restaurantSeedData)
    .then(restaurants => {
        console.log(restaurants)
    })
    .catch(err => {
        console.log(err)
    })
})

review.deleteMany({}).then(() => {
    review.collection.insert(reviewSeedData)
    .then(reviews => {
        console.log(reviews)
    })
    .catch(err => {
        console.log(err)
    })
})
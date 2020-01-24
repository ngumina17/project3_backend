const mongoose = require('./connection')
const restaurant = require('../models/Restaurant')
const review = require('../models/Review')
const seedData = require('./seedData')

restaurant.deleteMany({}).then(() => {
    restaurant.collection.insert(seedData)
    .then(restaurants => {
        console.log(restaurants)
    })
    .catch(err => {
        console.log(err)
    })
})

review.deleteMany({}).then(() => {
    review.collection.insert(seedData)
    .then(reviews => {
        console.log(reviews)
    })
    .catch(err => {
        console.log(err)
    })
})
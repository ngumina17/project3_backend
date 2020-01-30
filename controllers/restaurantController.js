const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const Review = require('../models/Review')

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

// router.put("/:id", (req, res) => {
//   Restaurant.findByIdAndUpdate(req.params.id, req.body, {
//     new: true
//   }).then(restaurant => {
//     res.json(restaurant);
//   });
// });

// router.put("/:id", (req, res) => {
//     let restaurantID = req.params.id;
//     Restaurant.findOneAndUpdate({_id: restaurantID}, req.body).then(singleRestaurant => {
//     Review.create(req.body).then(reviews => {
//              singleRestaurant.reviews.unshift([reviews]);
//             }).then(() => {

//                 singleRestaurant.save();
//              let x = _id

//              res.json(x)
//                 // res.json(singleRestaurant);

//             })
//         });
       
    
//     });
//   ;

router.put("/:id", (req, res) => {
    //   res.json({ status: "ok" });
    // grabs the user data from the user key in req.body
      const newReview = req.body
    // grabs the bookmark data from the bookmark key in req.body
      const restaurant = req.params.id
      console.log(restaurant)
      // creates the user
    
   
          // creates the bookmark
        Restaurant.find({_id: restaurant}).then(restaurants => {
            
            Review.create(newReview).then(reviews => {
                restaurants[0].reviews.push(reviews._id)
                reviews.restaurant = restaurants._id
                reviews.save()
                restaurants[0].save()
                res.json(restaurants)
        //     // add the bookmark id to the users favorites array
        //     reviews.restaurant.push(restaurant._id)
        //     // add the user id to the bookmarks favorited array
        //     restaurant.reviews.push(reviews._id)
        //     .then(() => {

        //         // save changes to user
        //         reviews.save()
        //         // save changes to bookmark
        //         restaurants.save()
        //         // returns the user as json
        //         res.json(restaurants)
        //     })
        // })
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

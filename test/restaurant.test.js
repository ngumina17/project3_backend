// const should = require("chai").should;
// const expect = require("chai").expect;
// const supertest = require("supertest");
// const api = supertest("http://localhost:8080");

// describe("GET /restaurants", function() {
//   it("should return a 200 response", function(done) {
//     api
//       .get("/restaurants")
//       .set("Accept", "application/json")
//       .expect(200, done);
//   });

//   it("should return an array", function(done) {
//     api
//       .get("/restaurants")
//       .set("Accept", "application/json")
//       .end(function(error, response) {
//         expect(response.body).to.be.an("array");
//         done();
//       });
//   });

//   it("should return an array of objects that have a field called 'name' ", function(done) {
//     api
//       .get("/restaurants")
//       .set("Accept", "application/json")
//       .end(function(error, response) {
//         expect(response.body[0]).to.have.property("name");
//         done();
//       });
//   });
// });

// describe("POST /restaurants", function() {
//   before(function(done) {
//     api
//       .post("/restaurants")
//       .set("Accept", "application/json")
//       .send({
//         name: "Quiveys Grove",
//         address: "6261 Nesbitt Rd",
//         city: "Fitchburg",
//         state: "WI",
//         postal_code: 53719,
//         stars: 90,
//         review_count: 200
//       })
//       .end(done);
//     //this errored when I tried adding categories
//   });
//   it("should add an entire new restaurant object and return it", function(done) {
//     api
//       .get("/restaurants")
//       .set("Accept", "application/json")
//       .end(function(error, response) {
//         expect(response.body.length).to.equal(10);
//         done();
//       });
//   });
// });

// describe("DELETE /restaurants/:id", () => {
//   let previousLength;
//   let idToDelete;

//   before(done => {
//     api
//       .get("/restaurants")
//       .set("Accept", "application/json")
//       .end((error, response) => {
//         previousLength = response.body.length;
//         idToDelete = response.body[0]._id;
//         done();
//       });
//   });

//   before(done => {
//     // console.log(idToDelete)
//     api
//       .delete(`/restaurants/${idToDelete}`)
//       .set("Accept", "application/json")
//       .end((error, response) => {
//         done();
//       });
//   });

//   it("deletes a restaurant by id", done => {
//     api
//       .get("/restaurants")
//       .set("Accept", "application/json")
//       .end((error, response) => {
//         expect(response.body.length).to.equal(previousLength - 1);
//         expect(response.body.find(ideas => ideas.id == idToDelete)).to.equal(
//           undefined
//         );
//         done();
//       });
//   });
// });

// describe("PUT /restaurants/:id", () => {
//     let restaurantToUpdate;
//     before(done => {
//       api
//         .get("/restaurants/:id")
//         .set("Accept", "application/json")
//         .end((err, res) => {
//           restaurantToUpdate = res.body[0];
//           done();
//       });
//     });
//     before(done => {
//       api
//         .put(`/restaurants/${restaurantToUpdate._id}`)
//         .set("Accept", "application/json")
//         .send({
//           _id: restaurantToUpdate._id,
//           name: restaurantToUpdate.name,
//           postal_code: "12345",
//         })
//         .end(done);
//     });
//     it("Should update a restaurant in the restaurants collection", done => {
//       api
//         .get(`/restaurants/${restaurantToUpdate._id}`)
//         .set("Accept", "application/json")
//         .end((err, res) => {
//           expect(res.body[0].postal_code).to.equal("12345");
//           done();
//         });
//     });
//   });

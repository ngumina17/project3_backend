const should = require("chai").should;
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:8080");

// describe("GET /reviews", function() {
//   it("should return a 200 response", function(done) {
//     api
//       .get("/reviews")
//       .set("Accept", "application/json")
//       .expect(200, done);
//   });

//   it("should return an array", function(done) {
//     api
//       .get("/reviews")
//       .set("Accept", "application/json")
//       .end(function(error, response) {
//         expect(response.body).to.be.an("array");
//         done();
//       });
//   });

//   it("should return an array of objects that have a field called 'rating' ", function(done) {
//     api
//       .get("/reviews")
//       .set("Accept", "application/json")
//       .end(function(error, response) {
//         expect(response.body[0]).to.have.property("rating");
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
//         rating: 5,
//         text: "Best restaurant ever!",
//       })
//       .end(done);
//   });
//   it("should add an entire new rating object and return it", function(done) {
//     api
//       .get("/reviews")
//       .set("Accept", "application/json")
//       .end(function(error, response) {
//         expect(response.body.length).to.equal(12);
//         done();
//       });
//   });
// });

// describe("DELETE /reviews/:id", () => {
//   let previousLength;
//   let idToDelete;

//   before(done => {
//     api
//       .get("/reviews")
//       .set("Accept", "application/json")
//       .end((error, response) => {
//         previousLength = response.body.length;
//         idToDelete = response.body[0]._id;
//         done();
//       });
//   });

//   before(done => {
//     api
//       .delete(`/reviews/${idToDelete}`)
//       .set("Accept", "application/json")
//       .end((error, response) => {
//         done();
//       });
//   });

//   it("deletes a review by id", done => {
//     api
//       .get("/reviews")
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

describe("PUT /reviews/:id", () => {
  let reviewToUpdate;
  before(done => {
    api
      .get("/reviews/:id")
      .set("Accept", "application/json")
      .end((err, res) => {
        reviewToUpdate = res.body[0];
        done();
      });
  });
  before(done => {
    api
      .put(`/reviews/${reviewToUpdate._id}`)
      .set("Accept", "application/json")
      .send({
        _id: reviewToUpdate._id,
        rating: 1,
        text: reviewToUpdate._text
      })
      .end((error, response) => {
        done();
      });
  });
  it("Should update a review in the reviews collection", done => {
    api
      .get(`/reviews/${reviewToUpdate._id}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[0].rating).to.equal("1");
        done();
      });
  });
});

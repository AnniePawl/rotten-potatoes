// // tell mocha you want to test Reviews (this string is taco)
// describe('Reviews', ()  => {
//   // make taco name for the test
//   it('should index ALL reviews on / GET', (done) => {
//     // use chai-http to make a request to your server
//     chai.request(server)
//         // send a GET request to root route
//         .get('/')
//         // wait for response
//         .end((err, res) => {
//           // check that the response status is = 200 (success)
//           res.should.have.status(200);
//           // check that the response is a type html
//           res.should.be.html;
//           // end this test and move onto the next.
//           done();
//         });
//   });
// });


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Review = require('../models/review');

chai.use(chaiHttp);

describe('Reviews', ()  => {

  // TEST INDEX
  it('should index ALL reviews on / GET', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });

  // TEST NEW
  // TEST CREATE
  // TEST SHOW
  // TEST EDIT
  // TEST UPDATE
  // TEST DELETE
});

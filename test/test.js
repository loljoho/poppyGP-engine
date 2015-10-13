//
// test.js
//


/* Configuration
–––––––––––––––––––––––––––––––––––––––––––––––––– */

var should    = require('chai').should(),
    request = require('supertest'),
    api       = request('http://localhost:8080');


describe('/hello/joho', function() {

  // Check server is running
  // ------------------------------
  before(function(done) {
    //var server = require('../index');

    setTimeout(function() {
      api.get('/')
        .expect(404)
        .end(function(err, res) {
            if (err) {
              if (err.code === 'ECONNREFUSED') return done(new Error('Server is not running.'));
              return done(err);
            }
            return done();
        });
    }, 500);
  });


  // Test route /hello/joho
  // ------------------------------
  it('returns salutations in the form of an object:', function(done) {

    api.get('/hello/joho')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if(err) {
          return done(err);
        }
        var response = res.body;
        response.should.be.an('object');
        response.hello.should.equal("joho");
        return done();
      });
  });
});
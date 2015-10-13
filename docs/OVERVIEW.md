## Playlist Parsing Logic ##

 - __Method 1__
   - Retrieve `year && round` from `track`
   - Query `http://ergast.com/api/f1/:season/:round/races.json`
 - __Method 2__
   - Retrieve `year && circuit` from `track`
   - Query `http://ergast.com/api/f1/:season/circuits/:circuit/races.json`
 - __Method 3__
   - Retrieve `year && ( locality || country )` from `track`
   - Query API to retrieve `circuit` by `locality` or `country`
   - Query `http://ergast.com/api/f1/:season/circuits/:circuit/races.json`

```
data/
├── 
│   ├── 
```

http://www.techinsight.io/review/devops-and-automation/automating-unit-and-integration-testing-with-the-mean-stack/



```
var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    JS_PATH_SERVER = "app/,
    TEST_PATH_SERVER = "tests/";

// Run Node.js tests and create LCOV-format reports with Istanbul
gulp.task('test-server', function () {
  return gulp.src([JS_PATH_SERVER + '**/*.js'])
      .pipe(istanbul()) // Node.js source coverage
      .on('end', function () {
          gulp.src(TEST_PATH_SERVER + '**/*.js')
              .pipe(mocha({
                  reporter: 'spec'
              }))
              .on('error', handleError)
              .pipe(istanbul.writeReports('reports')); // Creating reports
      });
});
```

```
var should = require('should'),
    request = require('supertest');

it('should respond with a successful top ten array', function(done) {
    request(app)
        .get('/api/topten')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
            expect(err).to.not.exist;
            res.should.have.status(200);
            res.body.should.be.array;
            done();
        });
});
```

`sudo npm install --save-dev gulp gulp-concat gulp-istanbul gulp-livereload gulp-load-plugins gulp-mocha gulp-nodemon gulp-jshint gulp-uglify gulp-util jshint-stylish should sinon supertest && sudo npm install --save errorhandler forever lodash mongoose passport passport-twitter

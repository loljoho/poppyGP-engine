var conf = {
  file: {
    main: 'index.js'
  }
};

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script  : conf.file.main,
    ext     : 'js',
    stdout  : false
  }).on('readable', function() {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

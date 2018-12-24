var glup = require("glup");
var autoprefixer = require("glup-autoprefixer");

glup.task("styles3", function() {
  glup
    .src("css/styles3.css")
    .pipe(autoprefixer())
    .pipe(glup.dest("build"));
});

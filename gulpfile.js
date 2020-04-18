const { src, dest, parallel, watch } = require("gulp");
const ts = require("gulp-typescript");
const less = require("gulp-less");

function TypeScript(cb) {
  src("src/**/*.tsx")
    .pipe(ts.createProject("tsconfig.json")())
    .pipe(dest("dist/"));

  cb();
}

function Less(cb) {
  src("assets/**/*.less").pipe(less()).pipe(dest("dist/assets"));

  cb();
}

exports.build = parallel(TypeScript, Less);

exports.watch = function () {
  watch("src/**/*.tsx", TypeScript);
  watch("assets/**/*.less", Less);
};

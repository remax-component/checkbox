const { src, dest, parallel, watch, series } = require("gulp");
const ts = require("gulp-typescript");
const less = require("gulp-less");
const copy = require("gulp-copy");

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

function Copy(cb) {
  return src(["package.json", "dist/**/*"]).pipe(
    copy("example/node_modules/@remax-component/checkbox")
  );
}

exports.build = parallel(TypeScript, Less);

exports.watch = function () {
  series(exports.build, Copy)();
  watch("src/**/*.tsx", TypeScript);
  watch("assets/**/*.less", Less);
};

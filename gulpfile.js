var gulp = require('gulp')
const minify = require('gulp-minify')
var ts = require('gulp-typescript')
var typedoc = require("gulp-typedoc")

gulp.task('ts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            lib: ['es2015', 'dom'],
            module: 'es2015'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('minify', function () {
    return gulp.src('dist/index.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist'));
})

gulp.task('docs', function () {
    return gulp.src("src/index.ts").pipe(
        typedoc({
            out: "docs/",
            name: "Video Detailer",
            // mode: 'modules',
            target: 'ES6',
            excludeExternals:true,
            readme:'none'
        })
    )
})

gulp.task('default', function () {
    gulp.watch('src/**/*.ts', gulp.series(['ts', 'minify', 'docs']))
})
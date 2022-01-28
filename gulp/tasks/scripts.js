import config from '../config.js'
import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import terser from 'gulp-terser'
import gulpIf from 'gulp-if'
import rename from 'gulp-rename'
import gulpEsbuild from 'gulp-esbuild'

const bundleBuild = () => (
  gulp.src(`${config.src.js}/main.js`)
  .pipe(gulpEsbuild({
    outfile: 'bundle.js',
    bundle: true
  }))
  .pipe(gulpIf(config.isProd, terser()))
  .pipe(gulp.dest(`${config.dest.js}`))
)

export const scriptsBuild = (callback) => {
  gulp.src(`${config.src.js}/**/*.js`)
    .pipe(gulpIf(config.isDev, sourcemaps.init({loadMaps: true})))
    // .pipe(gulpIf(config.isProd, terser()))
    .pipe(gulpIf(config.isDev, sourcemaps.write()))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(`${config.dest.js}`))
  bundleBuild()
  callback()
}

export const scriptsWatch = (callback) => {
  gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild)
  callback()
}
import gulp from 'gulp'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import gulpIf from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import config from '../config.js'

export const lessBuild = (callback) => {
  gulp.src(`${config.src.less}/main.less`)
    .pipe( gulpIf( config.isDev, sourcemaps.init() ) )
    .pipe(less({
      includePaths: ['./node_modules']
    }))
    .pipe( gulpIf( config.isProd, autoprefixer() ) )
    .pipe( gulpIf( config.isProd, csso() ) )
    .pipe(rename({suffix: '.min'}))
    .pipe( gulpIf( config.isDev, sourcemaps.write() ) )
    .pipe(gulp.dest(`${config.dest.css}`))
  callback()
}

export const lessWatch = (callback) => {
  gulp.watch(`${config.src.sass}/main.less`)
  callback()
}
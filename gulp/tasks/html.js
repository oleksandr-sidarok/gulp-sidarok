import gulp from 'gulp'
import fileinclude from 'gulp-file-include'
import config from '../config.js'

const html = () => (
  gulp.src(`${config.src.root}/*.html`)
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(`${config.dest.root}`))
)

export const htmlBuild = html

export const htmlWatch = () => {
  gulp.watch(`${config.src.root}/*.html`, html)
}
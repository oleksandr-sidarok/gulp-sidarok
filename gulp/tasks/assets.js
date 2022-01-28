import gulp from 'gulp'
import config from '../config.js'

const fontsBuild = () => {
  return gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(`${config.dest.fonts}`))
}

const videosBuild = () => {
  return gulp.src(`${config.srс}/assets/videos/*`)
    .pipe(gulp.dest(`${config.dest.dest}/videos`))
}

export const assetsBuild = (callback) => {
  gulp.parallel(
    fontsBuild,
    videosBuild,
  )
  callback()
}

export const assetsWatch = (callback) => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild)
  gulp.watch(`${config.src}/assets/videos/*`, fontsBuild)
  callback()
}
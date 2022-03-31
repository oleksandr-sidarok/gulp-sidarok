import gulp from 'gulp'
import config from '../config.js'

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/*.*`)
    .pipe(gulp.dest(`${config.dest.fonts}`))
)

const videosBuild = () => (
  gulp.src(`${config.srс.root}/assets/videos/*`)
    .pipe(gulp.dest(`${config.dest.dest}/videos`))
)

export const assetsBuild = (callback) => {
  fontsBuild()
  gulp.parallel(
    videosBuild,
  )
  callback()
}

export const assetsWatch = (callback) => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild)
  gulp.watch(`${config.src}/assets/videos/*`, videosBuild)
  callback()
}

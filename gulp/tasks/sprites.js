import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'
import svgstore from 'gulp-svgstore'
import imageminSvgo from 'imagemin-svgo'
import config from '../config.js'

const spriteIcon = () => (
  gulp.src(`${config.src.icons}/**/*.svg`)
    .pipe(imagemin([
      imageminSvgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          }
        ]
      })
    ]))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(`${config.dest.icons}`))
)

export const spritesBuild = gulp.parallel(spriteIcon)

export const spritesWatch = () => {
  gulp.watch(`${config.src.icons}/**/*.svg`, spriteIcon)
}
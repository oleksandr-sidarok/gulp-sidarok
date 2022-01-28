import gulp from 'gulp'
import changed from 'gulp-changed'
import gulpIf from 'gulp-if'
import imagemin from 'gulp-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import imageminSvgo from 'imagemin-svgo'
import imageminWebp from 'imagemin-webp'
import rename from 'gulp-rename'
import config from '../config.js'

const copyImages = () => (
  gulp.src(`${config.src.images}/**/*`)
    .pipe(changed(config.dest.images))
    .pipe(gulpIf(config.isProd, imagemin([
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({quality: [0.7, 0.9]}),
      imageminSvgo(),
    ])))
    .pipe(gulp.dest(config.dest.images))
);

const toWebp = () => (
  gulp.src(`${config.src.images}/**/*.{jpg,png}`)
    .pipe(changed(config.dest.images, {extension: '.webp'}))
    .pipe(imagemin([
      imageminWebp({quality: 75})
    ]))
    .pipe(rename({extname: '.webp'}))
    .pipe(gulp.dest(`${config.dest.images}`))
)

export const imagesBuild = gulp.series(copyImages, toWebp);

export const imagesWatch = () => (
  gulp.watch(`${config.src.images}/**/*`, imagesBuild)
)
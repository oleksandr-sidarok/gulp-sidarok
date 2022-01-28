import browserSync from 'browser-sync'
import config from '../config.js'

const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: config.dest.root,
    },
    files: [
      `${config.dest.html}/*.html`,
      `${config.dest.css}/*.css`,
      `${config.dest.js}/*.js`,
      `${config.dest.images}/**/*`,
      {
        match: [`${config.dest.images}/**/*`],
        fn() {
          this.reload()
        }
      }
    ],
    open: false,
    notify: false,
  })

  callback()
}

export default server
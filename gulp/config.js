const scrPath = 'source'
const destPath = 'build'

const config = {
  src: {
    root: scrPath,
    less: `${scrPath}/less`,
    js: `${scrPath}/js`,
    fonts: `${scrPath}/assets/fonts`,
    images: `${scrPath}/assets/images`,
    icons: `${scrPath}/assets/icons`,
  },
  dest: {
    root: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/images`,
    icons: `${destPath}/icons`,
  },
  setEnv () {
    this.isProd = process.argv.includes('--prod')
    this.isDev = !this.isProd
  }
}

export default config
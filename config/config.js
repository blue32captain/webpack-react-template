import path from 'path'

const basePath = path.resolve(__dirname, '../')


const config = {

  paths: {
    base:     (file = '') => path.join(basePath, file),
    src:      (file = '') => path.join(basePath, 'src', file),
    client:   (file = '') => path.join(basePath, 'client', file),
  },

  publicPath: '/',

  http: {
    host: 'localhost',
    port: process.env.PORT || 9001,
  },
}

export default config

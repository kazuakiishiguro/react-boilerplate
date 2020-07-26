const ParcelProxyServer = require('parcel-proxy-server')

const server = new ParcelProxyServer({
  entryPoint: './index.html',
  parcelOptions: {
    https: false,
    autoinstall: false,
  },
})

server.bundler.on('buildEnd', () => {
  console.log('Build completed!')
})

server.listen(3000, () => {
  console.log('Parcel proxy server has started')
})


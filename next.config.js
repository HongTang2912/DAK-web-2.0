module.exports = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = {
  scssOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }, 
  images: {
    domains: ['example.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}


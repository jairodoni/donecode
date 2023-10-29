/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

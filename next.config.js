/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
      },
    images: {
        unoptimized: true,
      },
      trailingSlash: true,
}

module.exports = nextConfig

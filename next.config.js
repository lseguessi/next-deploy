/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
      },
    images: {
        unoptimized: true,
      },
      trailingSlash: true,
      output: 'export',
}

module.exports = nextConfig

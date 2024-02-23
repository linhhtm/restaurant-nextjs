// const withTwin = require('./withTwin.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "images.unsplash.com"
    },
    {
      hostname: "png.pngtree.com"
    },
    {
      hostname: "s.gravatar.com"
    },
    {
      hostname: "www.simplyrecipes.com"
    },
    {
      hostname: "gl.amthuc365.vn"
    },
    {
      hostname: "www.themealdb.com"
    }]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/search",
        destination: "/recipes",
      },
    ];
  },
};
module.exports = {
  reactStrictMode: true,
  ...nextConfig,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "www.themealdb.com",
      "gl.amthuc365.vn",
      "www.simplyrecipes.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

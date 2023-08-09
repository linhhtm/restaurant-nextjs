/** @type {import('next').NextConfig} */
const nextConfig = {
  presets: [require.resolve("next/babel")],
  plugins: [[require.resolve("babel-plugin-macros")]],
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

module.exports = nextConfig;

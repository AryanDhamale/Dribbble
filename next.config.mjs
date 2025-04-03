/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
          {
            protocol: 'http',
            hostname: '**',
          },
        ],
      },
      webpack: (config) => {
        config.module.rules.push({
          test: /\.json$/,
          type: 'json'
        });
        return config;
      }
};

export default nextConfig;

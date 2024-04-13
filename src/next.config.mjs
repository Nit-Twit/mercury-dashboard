/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
      },
    ],
    },
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.node/,
          use: 'node-loader'
        })
     
        return config
      },

};

export default nextConfig;

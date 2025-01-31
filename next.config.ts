/** @type {import('next').NextConfig} */

module.exports = {
  eslint:{
      ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  reactStrictMode: false,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'lhtuwugxyogcwhhrnyyp.supabase.co'
      }
    ]
  }
};

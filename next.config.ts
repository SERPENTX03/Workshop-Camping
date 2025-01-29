/** @type {import('next').NextConfig} */

module.exports = {
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

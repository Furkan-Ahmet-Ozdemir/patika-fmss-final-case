/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'static.nike.com',
        port: '',
      },
      {
        hostname: 'fakestoreapi.com',
        port: '',
      },
      {
        hostname: 'mdbcdn.b-cdn.net',
        port: '',
      },
      {
        hostname: 'bootstrap-ecommerce.com',
        port: '',
      },
    ],
  },
  }

export default nextConfig;

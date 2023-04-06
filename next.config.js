/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env :{
    RAPID_API_URL : process.env.RAPID_API_URL,
    RAPID_API_HOST : process.env.RAPID_API_HOST
  }

}

module.exports = nextConfig

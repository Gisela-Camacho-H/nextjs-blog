// @ts-check
 
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    /* config options here */
  }
   
  module.exports = nextConfig


  module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }
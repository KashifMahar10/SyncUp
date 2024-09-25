/** @type {import('next').NextConfig} */ 
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // The frontend API endpoint
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/:path*`, // Proxy to backend auth endpoints
        },
      ];
    },
};
  
export default nextConfig; // Correct export for ESM (.mjs)

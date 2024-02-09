/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // runtime: 'edge', // for Edge API Routes only
    images: {
        unoptimized: true,
    },
};
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'floorplans.giraffe360.com',
                port: '',
                pathname: '/demo/**',
            },
            {
                protocol: 'https',
                hostname: 'photos.giraffe360.com',
                port: '',
                pathname: '/demo/**',
            },
            {
                protocol: 'https',
                hostname: 'premium.giraffe360.com',
                port: '',
                pathname: '/demo/**',
            },
        ],
    },
}

module.exports = nextConfig

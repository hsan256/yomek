/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreBuildErrors: true,
        ignoreDuringBuilds: true,
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig

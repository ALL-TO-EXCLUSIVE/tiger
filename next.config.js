/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"images.unsplash.com"
            },
            {
                hostname:"framerusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig

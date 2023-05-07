/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        //   port: "",
        //   pathname:
        //     "/photos/16208831/pexels-photo-16208831.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        //
      },
    ],
  },
};

module.exports = nextConfig;

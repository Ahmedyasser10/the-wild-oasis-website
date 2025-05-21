/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cldvuzgablydetvixsvy.supabase.co",
        pathname: "/storage/v1/object/public/cabin-iamges/**",
      },
    ],
  },
};

export default nextConfig;

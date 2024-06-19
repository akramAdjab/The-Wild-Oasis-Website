/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usxfcchjguhwkcmkrocr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "/a/ACg8ocLVXqLe-r2S42ot5JQrM4CNJerpX8jahmHWG9JHhEmbN_1R1EA=s96-c/**",
      },
    ],
  },
};

export default nextConfig;

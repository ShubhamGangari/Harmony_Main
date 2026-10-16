/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd()
  },
  async headers() {
    const isStaging =
      process.env.STAGING === "true" ||
      process.env.NEXT_PUBLIC_STAGING === "true" ||
      process.env.VERCEL_ENV === "preview";

    if (isStaging) {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "X-Robots-Tag",
              value: "noindex, nofollow",
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;

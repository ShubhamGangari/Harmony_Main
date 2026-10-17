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
  async redirects() {
    return [
      {
        source: "/wellness",
        destination: "/approach",
        permanent: true,
      },
      {
        source: "/research-evidence",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

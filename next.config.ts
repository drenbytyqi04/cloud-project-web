import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
      },
    ],
    // The generated images are hosted on Higgsfield's CDN. Next's built-in
    // optimizer fetches remote images server-side, which this sandbox's
    // network policy blocks; disabling it lets the browser load them
    // directly instead. Re-enable once the images are hosted locally
    // or on a proxy-reachable origin.
    unoptimized: true,
  },
};

export default nextConfig;

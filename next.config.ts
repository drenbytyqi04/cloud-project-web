import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Next's built-in optimizer fetches remote images server-side, which
    // this sandbox's network policy blocks; disabling it lets the browser
    // load them directly instead. Safe to re-enable once deployed
    // somewhere with normal outbound access.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);

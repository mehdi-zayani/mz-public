// next.config.ts

import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

// Initialize Next Intl plugin for i18n
const withNextIntl = createNextIntlPlugin();

// Define Next.js configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Define permanent redirect from root "/" to "/en"
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

// Export configuration wrapped with Next Intl plugin
export default withNextIntl(nextConfig);

// next.config.ts

import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

// Initialize the Next Intl plugin for internationalization support
const withNextIntl = createNextIntlPlugin();

// Define the Next.js configuration
const nextConfig: NextConfig = {
  // Enables React's strict mode for highlighting potential issues
  reactStrictMode: true,

  // Experimental settings (optional)
  experimental: {
    // Disable typed routes (can be enabled later if route typing is desired)
    typedRoutes: false,
  },
};

// Export the configuration wrapped with the Next Intl plugin
export default withNextIntl(nextConfig);

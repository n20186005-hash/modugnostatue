import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  output: 'standalone' as const,
  // Preserve the loopback host so locale rewrites remain internal in local previews.
  skipMiddlewareUrlNormalize: true,
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
};

export default withNextIntl(nextConfig);

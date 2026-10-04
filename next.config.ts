import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  output: 'standalone' as const,
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'host',
            value: 'modugnostatue.com',
          },
        ],
        destination: 'https://www.modugnostatue.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

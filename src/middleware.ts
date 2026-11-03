import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Redirect only the apex domain, preserving the actual path and query string.
  // A next.config.ts redirect using /:path* was served as a literal URL in production.
  if (request.headers.get('host')?.toLowerCase() === 'modugnostatue.com') {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = 'https:';
    canonicalUrl.hostname = 'www.modugnostatue.com';
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

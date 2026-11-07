import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let all /api/* routes through without locale processing
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Let the standalone /login and /admin pages through without locale processing
  if (pathname === '/login' || pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Apply next-intl locale routing for all other paths
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals, static files, and api
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
};

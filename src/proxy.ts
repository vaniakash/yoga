import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let NextAuth handle its own /api/auth/* routes
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Let the standalone /login page through without locale processing
  if (pathname === '/login') {
    return NextResponse.next();
  }

  // Apply next-intl locale routing for all other paths
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals, static files, and api/auth
    '/((?!_next|_vercel|api/auth|.*\\..*).*)',
  ],
};

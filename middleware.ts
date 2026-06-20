import { NextRequest, NextResponse } from 'next/server';

const GATE_COOKIE = 'cf_gate_auth';
const GATE_PATH = '/gate';

// Reads the gate password regardless of runtime. Next.js Middleware on Netlify
// compiles to a Deno-based Edge Function, where environment variables must be
// read via the global `Netlify.env` object -- `process.env` is not reliable
// there. Falls back to process.env for local `next dev` / non-edge contexts.
function getGatePassword(): string | undefined {
  try {
    // @ts-ignore -- global injected by the Netlify Edge runtime only
    if (typeof Netlify !== 'undefined' && Netlify?.env?.get) {
      // @ts-ignore
      const v = Netlify.env.get('APP_GATE_PASSWORD');
      if (v) return v;
    }
  } catch {}
  return process.env.APP_GATE_PASSWORD;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Never gate the gate page itself, its API, or Next.js internals/static assets
  if (
    pathname === GATE_PATH ||
    pathname === '/api/gate-auth' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(GATE_COOKIE)?.value;
  const expectedPassword = getGatePassword();

  // If no password is configured, fail open rather than locking everyone out
  if (!expectedPassword) {
    return NextResponse.next();
  }

  if (cookie === expectedPassword) {
    return NextResponse.next();
  }

  // Not authenticated: redirect page loads to the gate, block API calls outright
  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const gateUrl = new URL(GATE_PATH, req.url);
  gateUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(gateUrl);
}

export const config = {
  // Run on everything except Next internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

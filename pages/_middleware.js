import { NextResponse } from 'next/server';
export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  /* Middleware for prevent to login page after login */
  if ((refreshToken || accessToken) && pathname.startsWith('/login')) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}

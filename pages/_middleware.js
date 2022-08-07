import { NextResponse } from 'next/server';

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.accessToken;

  /* Middleware for prevent to login page after login */
  if (accessToken && pathname.startsWith('/login')) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}

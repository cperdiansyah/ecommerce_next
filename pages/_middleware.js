import { NextResponse } from 'next/server';
export default function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  // const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  const token = refreshToken;

  /* Middleware for prevent to Login page after login */
  if (token && pathname.startsWith('/login')) {
    return NextResponse.redirect(`${origin}/`);
  }

  // Middleware to check if the user is logged in
  if (token) {
    return NextResponse.next().cookie('isLogin', 1);
  }
  return NextResponse.next().cookie('isLogin', 0);
  
}

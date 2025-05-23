import { NextResponse, NextRequest } from "next/server";

// Define protected and public routes
const PROTECTED_ROUTES = ["/career-form-enquiry", "/admin/dashboard"];

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value === "LoggedIn";
  const pathname = req.nextUrl.pathname;

  // 🛑 If logged-in user visits login, redirect to career-form-enquiry
  if (pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/career-form-enquiry", req.url));
  }

  // ✅ Allow login page for unauthenticated users
  if (pathname === "/login" && !session) {
    return NextResponse.next();
  }

  // 🔒 Block protected routes if not authenticated
  if (
    PROTECTED_ROUTES.some((route) => pathname.startsWith(route)) &&
    !session
  ) {
    return NextResponse.redirect(new URL("/career-form-enquiry", req.url));
  }

  // ✅ Allow all other access
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/career-form-enquiry", "/admin/:path*"],
};

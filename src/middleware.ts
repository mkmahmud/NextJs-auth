import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/dashboard", "/profile"];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const isProtectedPath = protectedPaths.some((path) =>
        pathname.startsWith(path)
    );

    // Check for all possible NextAuth session cookies
    const sessionToken =
        req.cookies.get("authjs.session-token")

    const isAuthenticated = !!sessionToken;

    if (isProtectedPath && !isAuthenticated) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    return NextResponse.next();
}
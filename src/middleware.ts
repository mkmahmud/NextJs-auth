import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/dashboard", "/profile"];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const isProtectedPath = protectedPaths.some((path) =>
        pathname.startsWith(path)
    );

    const isAuthenticated = req.cookies.get("auth-token");

    if (isProtectedPath && !isAuthenticated) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
}
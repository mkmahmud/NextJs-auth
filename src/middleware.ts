import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const protectedPaths = ["/dashboard", "/profile"];

export async function middleware(req: NextRequest) {

    const session = await auth();
    const { pathname } = req.nextUrl;

    const isProtectedPath = protectedPaths.some((path) =>
        pathname.startsWith(path)
    );

    if (isProtectedPath && !session) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }


    return NextResponse.next();
}
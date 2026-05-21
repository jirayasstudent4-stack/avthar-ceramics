import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

import {
  verifyDealerToken,
} from "@/lib/dealer-auth";

export default function proxy(
  request: NextRequest
) {
  const token =
    request.cookies.get(
      "dealer_token"
    )?.value;

  const protectedRoutes = [
    "/dealer/dashboard",
    "/dealer/products",
    "/dealer/cart",
    "/dealer/orders",
    "/dealer/payments",
    "/dealer/invoices",
  ];

  const isProtected =
    protectedRoutes.some(
      (route) =>
        request.nextUrl.pathname.startsWith(
          route
        )
    );

  if (
    isProtected &&
    (!token ||
      !verifyDealerToken(
        token
      ))
  ) {
    return NextResponse.redirect(
      new URL(
        "/dealer/login",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dealer/:path*",
  ],
};
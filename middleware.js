import { NextResponse } from "next/server";
import loggedInUser from "./app/login/action/loggedInUser";

const protectedRoutes = ["/cart", "/me"];
export default async function middleware(request) {
  const { data } = await loggedInUser();

  if (
    data?.user?.role !== "user" &&
    protectedRoutes.includes(request.nextUrl.pathname)
  ) {
    const url = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(url.toString());
  }
}

"use server";

import getCookie from "@/utils/cookieHandle/getCookie";
import getData from "@/utils/httpRequests/getData";

export default async function loggedInUser() {
  const token = await getCookie("@token");

  const user = await getData("/users/me", `Bearer ${token}`);

  return user;
}

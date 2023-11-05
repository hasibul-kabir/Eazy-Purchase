"use server";

import getCookie from "@/utils/cookieHandle/getCookie";
import setCookie from "@/utils/cookieHandle/setCookie";
import getData from "@/utils/httpRequests/getData";
import postData from "@/utils/httpRequests/postData";

export default async function login(email, password) {
  const tokenData = await postData("/users/login", { email, password });

  setCookie("@token", tokenData.token);

  const token = await getCookie("@token");

  const currentUserRes = await getData("/users/me", `Bearer ${token}`);

  return currentUserRes;
}

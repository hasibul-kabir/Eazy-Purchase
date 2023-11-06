"use server";

import setCookie from "@/utils/cookieHandle/setCookie";
import postData from "@/utils/httpRequests/postData";
import loggedInUser from "./loggedInUser";
import { redirect } from "next/navigation";

export default async function login(email, password) {
  const tokenData = await postData("/users/login", { email, password });
  setCookie("@token", tokenData.token);

  const user = await loggedInUser();

  if (user.data?.user.role === "user") {
    redirect("/me");
  } else if (user.data?.user.role === "admin") {
    redirect("/we");
  }
}

"use server";

import loggedInUser from "./loggedInUser";
import postData from "@/utils/httpRequests/postData";
import setCookie from "@/utils/cookieHandle/setCookie";

export default async function login(email, password) {
  try {
    const tokenData = await postData("/users/login", { email, password });
    setCookie("@token", tokenData.token);

    const user = await loggedInUser();

    return user;
  } catch (error) {
    return {
      error,
    };
  }
}

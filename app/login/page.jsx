import { cookies } from "next/headers";

import APIRequests from "@/utils/APIRequests/APIRequests";
import LoginForm from "./components/LoginForm";

export default async function Login() {
  const userLogin = async (email, password) => {
    "use server";
    try {
      const { data: tokenData } = await APIRequests.users.login(
        email,
        password
      );
      cookies().set("@AUTH_TOKEN", tokenData.token);

      const { data: meData } = await APIRequests.users.getMe(tokenData.token);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <main className="min-h-screen bg-background py-8 px-12">
      <h1 className="font-bold text-4xl text-center text-headline">
        Login Page!
      </h1>

      <LoginForm userLogin={userLogin} />
    </main>
  );
}

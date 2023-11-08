"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import login from "../action/login";

import Button from "@/components/Buttons/Button";
import InputField from "@/components/Forms/InputField";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await login(email, password);

    if (result.error) {
      toast.error(result.error.message);
    } else {
      router.push("/me");
      toast.success("Login successful");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-main mx-auto max-w-xl mt-12 px-6 py-4 rounded flex flex-col gap-3"
    >
      <InputField
        name="email"
        type="email"
        label="Email"
        value={email}
        placeholder="Ex: example.email.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        value={password}
        placeholder="XXXXXXXXXXX"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

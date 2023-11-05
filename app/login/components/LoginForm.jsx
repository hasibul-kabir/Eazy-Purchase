"use client";

import { useState } from "react";

import InputField from "@/components/Forms/InputField";
import Button from "@/components/Buttons/Button";
import login from "../action/login";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentUser = await login(email, password);

    console.log(currentUser);
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

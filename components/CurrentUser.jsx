"use client";

import { useContext } from "react";

import { UserContext } from "@/store/UserContext";

export default function CurrentUser() {
  const { currentUser } = useContext(UserContext);
  return <div>Hello {currentUser?.name}</div>;
}

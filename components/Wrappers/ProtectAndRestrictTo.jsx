"use client";

import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";

import { UserContext } from "@/store/UserContext";

export default function ProtectAndRestrictTo({ restrictTo, user, children }) {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (user.status === "success") {
      setCurrentUser(user.data.user);
    }
  }, []);

  if (user.status !== "success") {
    return redirect("/login");
  }

  if (user.status === "success" && user.data.user.role === restrictTo) {
    return children;
  }

  return redirect("/");
}

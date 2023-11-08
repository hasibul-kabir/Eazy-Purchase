"use client";

import React, { createContext, useEffect, useState } from "react";

import loggedInUser from "@/app/login/action/loggedInUser";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loggedInUser().then((data) => {
      if (data?.status !== "success") {
        setUser(null);
      }

      if (data?.status === "success") {
        setUser(data.data.user);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser: user, setCurrentUser: setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

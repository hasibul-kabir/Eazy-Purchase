"use client";

import React, { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = () => {
  return (
    <UserContext.Provider value={"something"}>{children}</UserContext.Provider>
  );
};

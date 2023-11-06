"use client";

import React, { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{ currentUser: user, setCurrentUser: setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

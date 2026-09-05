import React, { useState, createContext } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastname: "",
    },
    email: "",
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;

import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const UserProtectedWrapper = ({ children }) => {
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  console.log("token " + token);

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
      console.log("moving to login");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <div>{children}</div>;
};

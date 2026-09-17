import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const [loading, setLoading] = useState(true);

  const captainToken = localStorage.getItem("captainToken");

  useEffect(() => {
    if (!captainToken) {
      navigate("/captain-login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${captainToken}`,
        },
      })
      .then((response) => {
        const data = response.data;

        setCaptain(data.captain);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Captain profile error:", error);

        localStorage.removeItem("captainToken");
        navigate("/captain-login");
      });
  }, [captainToken, navigate, setCaptain]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (!captainToken) {
    return null;
  }

  return <>{children}</>;
};

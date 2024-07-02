import React, { useContext, createContext, useState, useEffect } from "react";
import { serverProxyWithAuth } from "../lib/api";
import { useQuery } from "@tanstack/react-query";

const Data = createContext();

export const AuthProvider = ({ children }) => {


  const [auth, setAuth] = useState();
  const loginInfo = {
    auth,
    setAuth,
  };
  useQuery({
    queryKey: ["curuser"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      try {
        const res =await serverProxyWithAuth().get("/curuser");
        setAuth(res.data.user);
        return res.data.user;
      } catch (err) {
        console.log(err);
      }
    },
    enabled: !!localStorage.getItem("token"),
    onSuccess: (data) => {
      console.log("Execute the authentication",data);
    },
  });

  return <Data.Provider value={loginInfo}>{children}</Data.Provider>;
};
export const useAuth = () => {
  return useContext(Data);
};

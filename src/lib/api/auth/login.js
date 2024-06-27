import React, { useCallback, useState } from "react";
import { serverProxy } from "../index";
import toast from "react-hot-toast";

export const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const accountLogin = [
    {
      placeholder: "Enter your email",
      value: email,
      type: "text",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      placeholder: "Enter your password",
      value: password,
      type: "password",
      onChange: (e) => setPassword(e.target.value),
    },
  ];
  const emailLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        // console.log(email,password)
        const res = await serverProxy().post("/auth/login", {
          email,
          password,
        });
        // console.log(res)
        localStorage.setItem("token", res.data.token);
        const now = new Date();
        localStorage.setItem("tokenTimestamp", now.getTime());
        toast.success("Login Successful");
      } catch (e) {
        // console.log(e)
        toast.error("Login Failed");
      }
    },
    [email, password]
  );

  return { accountLogin, emailLogin };
};

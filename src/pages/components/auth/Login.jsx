import React from "react";
import GoBack from "../GoBack";
import { Link } from "react-router-dom";
import { login } from "../../../lib/api/auth/login";

const Login = () => {
  const { accountLogin, emailLogin } = login();

  return (
    <div>
      <GoBack />
      <div className="flex_row justify-center h-[80vh]">
        <div className="flex flex-col gap-5 md:w-1/4">
          <h1 className="text-2xl text-center font-bold">Login to compname</h1>
          <form onSubmit={emailLogin} className="flex flex-col gap-5">
            {accountLogin.map((input, index) => (
              <input key={index} {...input} />
            ))}

            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-full"
            >
              Login
            </button>
          </form>
          <div className="flex items-center gap-5">
            <hr className="flex-grow border-[1px] bg-imp" />
            <span>OR</span>
            <hr className="flex-grow border-[1px] bg-imp" />
          </div>
          <button className="bg-imp text-white py-3 rounded-full">
            Login with Google
          </button>
          <Link className="text-center underline" to="/auth/signup">
            Click here to signup{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import GoBack from "../GoBack";
import { Link } from "react-router-dom";
import { signup } from "../../../lib/api/auth/signup";

const SignUp = () => {
  const { accountSignup, emailSignup } = signup();

  return (
    <div>
      <GoBack />
      <div className="flex_row justify-center h-[80vh]">
        <div className="flex flex-col gap-5 md:w-1/4">
          <h1 className="text-2xl text-center font-bold">SignUp to compname</h1>
          <form onSubmit={emailSignup} className="flex flex-col gap-5">
            {accountSignup.map((input, index) => (
              <input key={index} {...input} />
            ))}

            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-full"
            >
              SignUp
            </button>
          </form>
          <div className="flex items-center gap-5">
            <hr className="flex-grow border-[1px] bg-imp" />
            <span>OR</span>
            <hr className="flex-grow border-[1px] bg-imp" />
          </div>
          <button className="bg-imp text-white py-3 rounded-full">
            SignUp with Google
          </button>
          <Link className="text-center underline" to="/auth/login">
            Click here to login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

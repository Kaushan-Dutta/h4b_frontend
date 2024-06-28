import React from "react";
import Background from "../assets/Background.jpg";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { auth } = useAuth();

  return (
    <div className="">
      <nav className="flex_row justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex_row justify-center gap-5">
          {!auth && (
            <>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/signup">Signup</Link>
            </>
          )}
          {auth && auth?.role=='admin' && <Link to="/admin">Admin Dashboard</Link>}
          {auth && auth?.role=='user' &&<Link to="/user">User Journey</Link>}
          
        </div>
      </nav>
      <div className="flex_row h-[80vh]">
        <div className="flex flex-col text-3xl gap-5">
          <h1 className="text-5xl font-mons ">
            <b>Indian Railways</b>
          </h1>
          <p>Connect to the all the asscessbility people</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

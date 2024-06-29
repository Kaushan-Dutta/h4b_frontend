import React from "react";
import Background from "../assets/Background.jpg";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Logo from "./Logo";


const Home = () => {
  const { auth } = useAuth();

  return (
    <div className="md:px-[5rem] py-5 px-[2rem]">
      <nav className="flex_row justify-between">
        <div>
          <Logo />
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
          {auth && <button onClick={()=>{
            localStorage.removeItem('token')
            window.location.reload()
          }}>Logout</button>}
          
        </div>
      </nav>
      <div className="flex_row h-[80vh]">
        <div className="flex flex-col text-5xl gap-5">
          <h1 className="text- font-mons ">
            <b>Rail Bytes</b>
            <p className="text-lg">-By Indian Railways</p>
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

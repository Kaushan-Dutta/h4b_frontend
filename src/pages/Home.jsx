import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Home = () => {
  const { auth } = useAuth();

  const backgroundStyle = {
    backgroundImage: 'url(https://w0.peakpx.com/wallpaper/879/765/HD-wallpaper-customize-indian-railways-theme-indian-train.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)', // Apply blur to the overlay
    zIndex: 0,
  };

  const nonBlurredSectionStyle = {
    position: 'relative',
    zIndex: 1,
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      <div className="md:px-[5rem] py-5 px-[2rem] relative z-10">
        <nav className="flex_row justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex_row justify-center gap-5">
            {!auth && (
              <>
                <Link to="/auth/login" className="border border-white text-white px-4 py-2 hover:bg-white hover:bg-opacity-10 transition">Login</Link>
                <Link to="/auth/signup" className="border border-white text-white px-4 py-2 hover:bg-white hover:bg-opacity-10 transition">Signup</Link>
              </>
            )}
            {auth && auth?.role === 'admin' && <Link to="/admin" className="border border-white text-white px-4 py-2 hover:bg-white hover:bg-opacity-10 transition">Admin Dashboard</Link>}
            {auth && auth?.role === 'user' && <Link to="/user" className="border border-white text-white px-4 py-2 hover:bg-white hover:bg-opacity-10 transition">User Journey</Link>}
            {auth && (
              <button
                className="border border-white text-white px-4 py-2 hover:bg-white hover:bg-opacity-10 transition"
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.reload();
                }}
              >
                Logout
              </button>
            )}
          </div>
        </nav>
        <div className="flex_row h-[80vh]" style={nonBlurredSectionStyle}>
          <div className="flex flex-col text-3xl gap-5">
            <div>
              <p className="text-white mb-3">Verified | Hygienic | Simple</p>
              <h1 className="text-8xl font-mons text-white mb-5">
                <b >Rail Bhoj</b>
              </h1>
              <p className="text-white mt-10" style={{ letterSpacing: '4px' }}>
                हर सफर में स्वस्थ और स्वादिष्ट भोजन !!
              </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

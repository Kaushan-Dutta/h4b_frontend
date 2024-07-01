import React from "react";
import { Link } from "react-router-dom";
import { RouteLinks } from "../../../routes.config";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";

const SectionLinks = () => {
  const { auth } = useAuth();
  const { pathname } = useLocation();

  console.log("Auth", pathname.split("/").pop());

  return (
    <div className="flex-col flex gap-3">
      {RouteLinks.map(
        (route, index) =>
          route.feature === "Dashboard" &&
          auth?.role == route.entity[0] &&
          route.sublinks &&
          route.sublinks.length > 0 &&
          route.sublinks.map(
            (sublink, index) =>
              sublink.title && (
                <div key={index}>
                  <div
                    className={`hover:border-[1px] ${
                      (pathname.includes(sublink.path) &&
                        sublink.path !== "") ||
                      pathname.split("/").pop() === ""
                        ? "bg-light"
                        : ""
                    } w-full p-2 rounded-md`}
                  >
                    <Link to={sublink.path} className="">
                      {sublink.title}
                    </Link>
                  </div>
                </div>
              )
          )
      )}
    </div>
  );
};
const SideBar = () => {
  return (
    <aside className="h-screen">
      <nav className="w-60 h-full  border-r-2 flex flex-col gap-10 p-5">
        <div className="flex_row justify-between gap-5">
          <Logo />
        </div>
        <div className="flex-1 ">
          <SectionLinks />
        </div>

        <div className="flex-col flex gap-5  ">
          <button
            className="bg-imp text-white py-2 rounded-md "
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;

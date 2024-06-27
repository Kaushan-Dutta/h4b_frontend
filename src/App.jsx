import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteLinks } from "../routes.config";
import Entity from "./wrapper/Entity";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { auth } = useAuth();
  return (
    <div className="bg-background min-h-screen max-w-screen-2xl mx-auto px-[2rem] md:px-[5rem] py-[2rem] font-mons">
      <Routes>
        {RouteLinks.filter((route) => {
          if (route.isCheck) {
            return route.check();
          }
          return true;
        }).filter(route=>{
          if(route.entity){
            if(auth){
              return route.entity.includes(auth?.role)
            }
            return false
          }
          return true
        }).map((route, index) =>
          route.sublinks && route.sublinks.length > 0 ? (
            <Route path={route.path} key={index} element={<Entity />}>
              {route.sublinks.map((sublink, index) => (
                <Route {...sublink} key={index} />
              ))}
            </Route>
          ) : (
            <Route key={index} {...route} />
          )
        )}
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";

import MakeJourney from "./src/pages/MakeJourney";
import PlaceOrder from "./src/pages/PlaceOrder";
import Dashboard from "./src/pages/Dashboard";


import Login from "./src/pages/components/auth/Login";
import SignUp from "./src/pages/components/auth/SignUp";

import Meals from "./src/pages/components/features/Meals";

import UserRate from "./src/pages/components/features/Rating";
import UserOrders from "./src/pages/components/features/Orders";
import UserNotification from "./src/pages/components/features/Notifications";

import Pantries from "./src/pages/components/features/Pantries";
import Hockers from "./src/pages/components/features/Hockers";

import Home from "./src/pages/Home";

import Contribute from "./src/pages/components/features/Contribute";
import AdminOrders from "./src/pages/components/features/AdminOrders";
export const RouteLinks = [
  {
    path: "/",
    element: <Home/>,
    title: "Home",
  },
  {
    path: "/auth/login",
    element: <Login />,
    title: "Login",
    isCheck: true,
    check:()=>{
      if(localStorage.getItem('token')){
        return false
      }
      return true
    }
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
    title: "SignUp",
    isCheck: true,
    check:()=>{
      if(localStorage.getItem('token')){
        return false
      }
      return true
    }
  },
  {
    path: "/placeorder",
    element: <PlaceOrder />,
    isCheck: false,
    title: "Place Order",
  },
  {
    path: "/admin/",
    entity: ["admin"],
    feature:'Dashboard',
    
    sublinks: [
      {
        path: "",
        element: <Dashboard />,
        title: "Dashboard",
      },
      {
        path: "meals",
        element: <Meals />,
        title: "Meals",
      },
      {
        path: "pantries",
        element: <Pantries />,
        title: "Pantries",
      },
      {
        path: "refund",
        element: <Contribute />,
        title: "Refund",
      },
      {
        path: "orders",
        element: <AdminOrders />,
        title: "Orders",
      },
      {
        path: "pantries/:pantryid",
        element: <Hockers />,

      },
    ],
  },
  {
    path: "/user/",
    entity: ["user"],
    element: <MakeJourney />,
  },
  {
    path: "/user/journey/:pantryid/",
    entity: ["user"],
    feature:'Dashboard',
    
    sublinks: [
      {
        path: "",
        element: <Dashboard />,
        title: "Dashboard",
      },
      {
        path: "orders",
        element: <UserOrders />,
        title: "Your Orders",
      },
      {
        path: "rate",
        element: <UserRate />,
        title: "Rate",
      },
      {
        path: "meals",
        element: <Meals />,
        title: "Meals",
      },
      {
        path: "notification",
        element: <UserNotification />,
        title: "Notification",
      },
    ],
  },
];

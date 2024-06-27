import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../pages/components/SideBar";
import { createjourney } from "../lib/api/users/createjourney";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [journeyExists, setJourneyExists] = useState(false);
  const { checkJourneyExists } = createjourney();

  const checkJourney = useCallback(async () => {
    console.log("check journey");
    const journey = await checkJourneyExists();
    console.log("Journey", journey);
    setJourneyExists(journey);
  }, [checkJourneyExists]);

  useEffect(() => {
    if (pathname.includes("/user/journey")) {
      checkJourney();
    }
  }, [pathname, checkJourney]);

  return (
    <div>
      <SideBar />
      {pathname.includes("/user/journey")?(journeyExists?<Outlet />:<h1>Journey Doesnot Exist</h1>):<Outlet/>}
    </div>
  );
};

export default Dashboard;

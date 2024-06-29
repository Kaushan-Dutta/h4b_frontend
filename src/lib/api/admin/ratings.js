import React, { useCallback, useState,useEffect } from "react";
// import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";
// import { useAuth } from "../../../context/AuthContext";

export const pantryRatings = () => {

  const [ratings, getRatings] = useState([]);

 
  

  const fetchRatings = useCallback(async () => {
    try {
      const res = await serverProxyWithAuth().get("/user/rating");
      console.log("Ratings are fetched",res.data.data);
      getRatings(res.data.data);
    } catch (err) {
      console.log(err);
    }
  },[]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  return { fetchRatings, ratings };
};

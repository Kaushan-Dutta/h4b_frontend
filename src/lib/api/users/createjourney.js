import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";
import { useLocation } from "react-router-dom";

export const createjourney = () => {

  const [pantryId, setPantryId] = useState();
  const [coach, setCoach] = useState();
  const [seat, setSeat] = useState();
  const [phone, setPhone] = useState();

  const {pathname} = useLocation();
  // console.log("Location",);

  const journeyDetails = [
    {
      placeholder: "Enter PantryId",
      value: pantryId,
      type: "text",
      onChange: (e) => setPantryId(e.target.value),
    },
    {
      placeholder: "Enter Coach",
      value: coach,
      type: "text",
      onChange: (e) => setCoach(e.target.value),
    },
    {
      placeholder: "Enter Seat ",
      value: seat,
      type: "number",
      onChange: (e) => setSeat(e.target.value),
    },
    {
        placeholder: "Enter Phone ",
        value: phone,
        type: "number",
        onChange: (e) => setPhone(e.target.value),
    },
  ];
  const addJourney = useCallback(
    async (e) => {
      e.preventDefault();
      try {

        const res = await serverProxyWithAuth().post("/user/journey", {
            pantryId,
            coach,
            seat,
            phone,
        });
        console.log(res);
        toast.success("Journey Added");
      } catch (err) {
        console.log(err);
        toast.error("Journey not added");
      }
    },
    [pantryId,
        coach,
        seat,
        phone,]
  );
//   const fetchMeals = useCallback(async () => {
//     try {
//       const res = await serverProxyWithAuth().get("/admin/meal");
//       console.log("Meals are fetched",res.data.data);
//       getMeals(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   },[]);

//   useEffect(() => {
//     fetchMeals();
//   }, [fetchMeals]);

  const checkJourneyExists = async () => {
    try {
      console.log(pathname);
      console.log(pathname.split("/")[3]);
      const res = await serverProxyWithAuth().get("/user/isJourneyExist?pantryId="+pathname.split("/")[3]);
      console.log(res);
      if(res)
        return true
      else
        return false
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return { journeyDetails, addJourney,checkJourneyExists};
};

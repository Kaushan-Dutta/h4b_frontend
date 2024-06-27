import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";

export const pantry = () => {
  const [trainName, setTrainName] = useState();
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();

  const [pantries, getPantries] = useState([]);
  
  const pantryDetails = [
    {
      placeholder: "Enter Trian Name",
      value: trainName,
      type: "text",
      onChange: (e) => setTrainName(e.target.value),
    },
    {
      placeholder: "Enter Arrival Station",
      value: arrival,
      type: "text",
      onChange: (e) => setArrival(e.target.value),
    },
    {
      placeholder: "Enter Departure Station",
      value: departure,
      type: "text",
      onChange: (e) => setDeparture(e.target.value),
    },
  ];
  const addPantry = useCallback(
    async (e) => {
      e.preventDefault();
      try {

        const res = await serverProxyWithAuth().post("/admin/pantry", {
            trainName,departure,arrival
        });
        console.log(res);
        toast.success("Pantry Added");
      } catch (err) {
        console.log(err);
        toast.error("Pantry not added");
      }
    },
    [trainName,departure,arrival]
  );
  const fetchPantries = useCallback(async () => {
    try {
      const res = await serverProxyWithAuth().get("/admin/pantry");
      console.log("Pantries are fetched",res.data.data);
      getPantries(res.data.data);
    } catch (err) {
      console.log(err);
    }
  },[]);

  useEffect(() => {
    fetchPantries();
  }, [fetchPantries]);

  return { pantryDetails, addPantry, fetchPantries, pantries };
};

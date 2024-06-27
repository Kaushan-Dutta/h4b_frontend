import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";
import { useAuth } from "../../../context/AuthContext";

export const pantrymeals = () => {
  const [mealName, setMealName] = useState();
  const [mealType, setMealType] = useState();
  const [mealPrice, setMealPrice] = useState();

  const [meals, getMeals] = useState([]);

  const {auth} = useAuth();
  
  const mealDetails = [
    {
      placeholder: "Enter Meal Name",
      value: mealName,
      type: "text",
      onChange: (e) => setMealName(e.target.value),
    },
    {
      placeholder: "Enter Meal Type",
      value: mealType,
      type: "text",
      onChange: (e) => setMealType(e.target.value),
    },
    {
      placeholder: "Enter Meal Price",
      value: mealPrice,
      type: "number",
      onChange: (e) => setMealPrice(e.target.value),
    },
  ];
  const addMeal = useCallback(
    async (e) => {
      e.preventDefault();
      try {

        const res = await serverProxyWithAuth().post("/admin/meal", {
          mealName,
          mealType,
          mealPrice,
        });
        console.log(res);
        toast.success("Meal Added");
      } catch (err) {
        console.log(err);
        toast.error("Meal not added");
      }
    },
    [mealName, mealType, mealPrice]
  );
  const fetchMeals = useCallback(async () => {
    try {
      const res = await serverProxyWithAuth().get(auth?.role=="admin"?"/admin/meal":"/user/meal");
      console.log("Meals are fetched",res.data.data);
      getMeals(res.data.data);
    } catch (err) {
      console.log(err);
    }
  },[]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return { mealDetails, addMeal, fetchMeals, meals };
};

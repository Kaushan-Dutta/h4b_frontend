import React, { useState, useCallback, useEffect } from "react";
import { serverProxyWithAuth } from "../index";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export const makeorder = () => {
  const {pathname} = useLocation();

  const [mealId, setMealId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [loading, setLoading] = useState(false);

  const [meals, setMeals] = useState();

  useEffect(() => {
    const loadContents = async () => {
      try {
        setLoading(true);
        const res = await serverProxyWithAuth().get("/user/meal");
        console.log("Meals is here",res.data);
        setMeals(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadContents();
  },[])
  const orderDetails=[
    {
        placeholder:"Select Meal",
        value:mealId,
        type:"select",
        onChange:(e)=>setMealId(e.target.value),
        options:meals?.map((meal)=>({
            value:meal._id,
            label:meal.mealName
        }))
    },
    {
      placeholder:"Enter Quantity",
      value:quantity,
      type:"number",
      onChange:(e)=>setQuantity(e.target.value)
    }
  ]
  const makeOrder = useCallback(
    async (e) => {
      e.preventDefault();
      
      try {
        const res = await serverProxyWithAuth().post("/user/order?pantryId="+pathname.split("/")[3], {
          pantryId: pathname.split("/")[3],
          mealId,
          mealName: meals.find((m) => m._id === mealId).mealName,
          quantity,
          totalPrice: parseInt(quantity) * parseInt(meals.find((m) => m._id === mealId).mealPrice),
        });
        console.log(res);
        toast.success("Order Placed");
      } catch (err) {
        console.log(err);
        toast.error("Order not placed");
      }
    },
    [ mealId, quantity, totalPrice]
  );

  return {
    loading,   
   makeOrder,
    orderDetails
  };
};


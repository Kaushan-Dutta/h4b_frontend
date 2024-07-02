import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { serverProxyWithAuth } from "../index";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";

export const pantrymeals = () => {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState('');
  const [mealPrice, setMealPrice] = useState('');
  // const [meals, setMeals] = useState([]);

  const { auth } = useAuth();
  const queryClient = useQueryClient();

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

  const fetchMeals = async () => {
    try {
      const res = await serverProxyWithAuth().get(auth?.role === "admin" ? "/admin/meal" : "/user/meal");
      console.log("Meals are fetched", res.data.data);
      // setMeals(res.data.data);
      return res.data.data;
    } catch (err) {
      console.error(err);
      toast.error("Error fetching meals");
    }
  };

  const addMeal = async () => {
    try {
      const res = await serverProxyWithAuth().post("/admin/meal", {
        mealName,
        mealType,
        mealPrice,
      });
      console.log("Meal Added");
      toast.success("Meal added successfully");
      return res.data.data;
    } catch (err) {
      console.error(err);
      toast.error("Error adding meal");
    }
  };

  const { data: meals } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchMeals,
    enabled: !!auth,
  });

  const mutation = useMutation({
    mutationFn: addMeal,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['meals'] });
      
    },
  });

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (mealName && mealType && mealPrice) {
      mutation.mutate();
    } else {
      toast.error("Please fill in all meal details");
    }
  };

  return { mealDetails, handleAddMeal, meals };
};

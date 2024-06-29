import React, { useState, useEffect, useCallback } from "react";
import { placeorder } from "../lib/api/users/placeorder";

const PlaceOrder = () => {
  const {
    loading,
    email,
    mealId,
    quantity,
    totalPrice,
    setEmail,
    setMealId,
    setQuantity,
    setTotalPrice,
    order,
    placeOrder,
  } = placeorder();

  const calculateTotalPrice = useCallback(() => {
    // console.log("Calculating Total Price",mealId)
    if (mealId && order?.meals) {
      const selectedMeal = order.meals.find((m) => m._id === mealId);
      if (selectedMeal) {
        const price = parseInt(selectedMeal?.mealPrice) || 0;
        // console.log(price)
        setTotalPrice(price * parseInt(quantity));
      }
    }
  }, [mealId, quantity, order?.meals, setTotalPrice]);

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex_row  gap-10 overflow-hidden">
      <div className="h-screen border-2 w-1/3"></div>
      <div className="w-2/3 flex-col flex gap-3">
        <h1 className="font-bold text-3xl">Place Order</h1>
        <p className="text-3xl">{order?.hocker.hockerName}( ID: {order?.hocker._id} )</p>
        <p >{order?.pantry.trainName}</p>
        <form onSubmit={placeOrder} className="flex-col flex gap-3 w-2/3">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            id="selectMeal"
            value={mealId}
            onChange={(e) => setMealId(e.target.value)}
            className="rounded-lg p-2"
          >
            {order?.meals.map((meal, index) => (
              <option key={index} value={meal._id}>
                {meal.mealName}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <p className="font-ubun text-2xl">Total Price: {totalPrice}</p>
          <button type="submit" className="rounded-full p-3 bg-imp w-40 text-white">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;

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
    placeOrder
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
    <div>
      <h1>Place Order</h1>
      <p>{order?.hocker.hockerName}</p>
      <p>{order?.hocker._id}</p>
      <p>{order?.pantry.trainName}</p>
      <form onSubmit={placeOrder}>
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
        <p>Total Price: {totalPrice}</p>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;

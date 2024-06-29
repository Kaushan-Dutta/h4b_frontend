import React, { useState, useCallback, useEffect } from "react";
import { serverProxy } from "../index";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export const placeorder = () => {
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");

  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [order, setOrder] = useState();
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadContents = async () => {
      const params = new URLSearchParams(search);
      try {
        setLoading(true);
        const res = await serverProxy().get(
          "/placeorder?hockerId=" + params.get("hockerId")
        );
        console.log(res.data);
        setOrder(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    loadContents();
  }, [search]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const payWithRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}payment/orders`);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_njkhQ67c5Bgwlt", 
      amount: String(totalPrice * 100), 
      currency: "INR",
      name: "Railway Corporation",
      description: "Test Transaction",
      order_id:order_id,
      handler: async function (response) {
        console.log(response);
      },
      prefill: {
        name: "Railway",
        email: "railway.test@gmail.com",
        contact: "9646812364",
      },
      theme: {
        color: "#8039DF",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrder = useCallback(
    async (e) => {
      e.preventDefault();
      // const isPaid = await payWithRazorpay();
      // if (!isPaid) {
      //   toast.error("Payment not done");
      //   return;
      // }
      // console.log("Meal history",mealId,order.meals.mealName)

      try {
        const res = await serverProxy().post("/placeorder", {
          pantryId: order.pantry._id,
          hockerId: order.hocker._id,
          email,
          mealId,
          
          mealName:order.meals.find((m) => m._id === mealId).mealName,
          quantity,
          totalPrice,
        });
        console.log(res);
        toast.success("Order Placed");
      } catch (err) {
        console.log(err);
        toast.error("Order not placed");
      }
    },
    [email, mealId, quantity, totalPrice, order]
  );

  return {
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
  };
};

export default placeorder;

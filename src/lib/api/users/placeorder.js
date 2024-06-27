import React, { useState, useCallback, useEffect } from "react";
import { serverProxy } from "../index";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export const placeorder = () => {
  // pantryId, hockerId, email, mealId, quantity, totalPrice
  const [email, setEmail] = useState("");
  const [mealId, setMealId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [order, setOrder] = useState();

  const { pathname, search } = useLocation();
  const [loading, setLoading] = useState(false);
  //   console.log("Location",pathname,search)

  //   const placeOrderDetails = [
  //     {
  //       placeholder: "Enter Email",
  //       value: email,
  //       type: "email",
  //       onChange: (e) => setEmail(e.target.value),
  //     },
  //     {
  //       placeholder: "Enter Meal",
  //       value: meal,
  //       type: "text",
  //       onChange: (e) => setMeal(e.target.value),
  //     },
  //     {
  //       placeholder: "Enter Quantity",
  //       value: quantity,
  //       type: "number",
  //       onChange: (e) => setQuantity(e.target.value),
  //     }
  //   ];

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
  }, []);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const payWithRazorpay = async () => {
    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        toast.error("Razorpay SDK failed to load. Are you online?");
        return;
      }
      const options = {
        key: "rzp_test_njkhQ67c5Bgwlt", // Enter the Key ID generated from the Dashboard
        amount: String(totalPrice),
        currency: "INR",
        name: "Railway Corporation",
        description: "Test Transaction",

        order_id:
          order?.pantry._id +
          order?.hocker._id +
          String(parseInt(Math.random() * 1000)),
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
    } catch (err) {
      console.log(err);
    }
  };
  const placeOrder = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const payment = await payWithRazorpay();
        console.log(payment);
        if (payment) {
          const res = await serverProxy().post("/placeorder", {
            pantryId: order.pantry._id,
            hockerId: order.hocker._id,
            email,
            mealId,
            quantity,
            totalPrice,
          });
          console.log(res);
          toast.success("Order Placed");
        }
      } catch (err) {
        console.log(err);
        toast.error("Order not placed");
      }
    },
    [email, mealId, quantity, totalPrice]
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

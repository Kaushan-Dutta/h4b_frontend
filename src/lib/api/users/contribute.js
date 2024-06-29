import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";
import { useLocation } from "react-router-dom";

export const contribute = () => {

  const [percent, setPercent] = useState();
  const [orderId, setOrderId] = useState();

  const {pathname} = useLocation();
  // console.log("Location",);

  const contributionDetails = [
    {
      placeholder: "Enter Quantity Left",
      value: percent,
      type: "number",
      onChange: (e) => setPercent(e.target.value),
    }
  ];
  const addContribute = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        console.log("Contribution Details",percent,orderId,pathname.split("/")[3]);
        const res = await serverProxyWithAuth().post("/user/contribute", {
            pantryId:pathname.split("/")[3],
            percent,
            orderId
        });
        console.log(res);
        toast.success("Contribution Added");
      } catch (err) {
        console.log(err);
        toast.error("Contribution not added");
      }
    },
    [percent,orderId]
  );



  return { addContribute,contributionDetails,setOrderId,orderId};
};

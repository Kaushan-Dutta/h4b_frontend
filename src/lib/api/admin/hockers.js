import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";
import { useLocation } from "react-router-dom";

export const pantryHockers = () => {
  const location=useLocation();
//   console.log("Location",(location.pathname.split("/"))[3]);

  const [hockerName, setHockerName] = useState();
  
  const [hockers, getHockers] = useState([]);
  
  const hockerDetails = [
    {
      placeholder: "Enter Hocker Name",
      value: hockerName,
      type: "text",
      onChange: (e) => setHockerName(e.target.value),
    }
  ];
  const addHocker = useCallback(
    async (e) => {
      e.preventDefault();
      try {

        const res = await serverProxyWithAuth().post("/admin/hocker", {
            hockerName,pantryId:(location.pathname.split("/"))[3]
        });
        console.log(res);
        toast.success("Hocker Added");
      } catch (err) {
        console.log(err);
        toast.error("Hocker not added");
      }
    },
    [hockerName]
  );
  const fetchHockers = useCallback(async () => {
    try {
      const res = await serverProxyWithAuth().get("/admin/pantry?pantryId="+(location.pathname.split("/"))[3]);
      console.log("Hockers are fetched",res.data.data);
      getHockers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  },[]);

  useEffect(() => {
    fetchHockers();
  }, [fetchHockers]);

  return { hockerDetails, addHocker,fetchHockers, hockers };
};

import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";

export const order = () => {
    const [orders,setOrders]=useState()

    useEffect(()=>{
        const loadContents=async()=>{
            try{
                const res=await serverProxyWithAuth().get("/admin/order");
                console.log("Orders is here",res.data.data);
                setOrders(res.data.data);
            }catch(err){
                console.log(err);
            }
        }
        loadContents();
    },[])
    


  return { orders };
};

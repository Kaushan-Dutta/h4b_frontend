import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";

export const refund = () => {
    const [contribute,setContribute]=useState()

    useEffect(()=>{
        const loadContents=async()=>{
            try{
                const res=await serverProxyWithAuth().get("/admin/contribute");
                console.log("Contribution is here",res.data.data);
                setContribute(res.data.data);
            }catch(err){
                console.log(err);
            }
        }
        loadContents();
    },[])
    


  return { contribute };
};

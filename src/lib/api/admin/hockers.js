import React, { useCallback, useState,useEffect } from "react";
import toast from "react-hot-toast";
import { serverProxyWithAuth } from "../index";
import { useLocation } from "react-router-dom";
import { useQuery,useMutation,useQueryClient  } from "@tanstack/react-query";
import { useAuth } from "../../../context/AuthContext";

export const pantryHockers = () => {
  const location=useLocation();
//   console.log("Location",(location.pathname.split("/"))[3]);
const queryClient = useQueryClient();

  const [hockerName, setHockerName] = useState('');
  
  // const [hockers, getHockers] = useState([]);
  const {auth}=useAuth();
  
  const hockerDetails = [
    {
      placeholder: "Enter Hocker Name",
      value: hockerName,
      type: "text",
      onChange: (e) => setHockerName(e.target.value),
    }
  ];
  const addHocker = async () => {
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
    };

  const fetchHockers = async () => {
    try {
      const res = await serverProxyWithAuth().get("/admin/pantry?pantryId="+(location.pathname.split("/"))[3]);
      console.log("Hockers are fetched",res.data.data);
      return res.data.data;
      // getHockers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const {data:hockers}=useQuery({
    queryKey:["hockers"],
    queryFn:fetchHockers,
    enabled:!!auth
  })
  const mutation = useMutation({
    mutationFn:addHocker,
    onSuccess:()=>{
      return queryClient.invalidateQueries({queryKey:["hockers"]})
      
    }})

  const handleAddHocker=(e)=>{
    e.preventDefault();
    if(hockerName){
      mutation.mutate()
    }
    else{
      toast.error("Please enter hocker name")
    }
  }
    
  return { hockerDetails, handleAddHocker, hockers };
};

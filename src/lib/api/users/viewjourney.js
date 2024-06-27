import React,{useState,useCallback,useEffect} from 'react'
import { serverProxyWithAuth } from '../index'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import {useAuth} from '../../../context/AuthContext'

export const viewjourney = () => {
  const {auth}=useAuth();
  const [orders,setOrders]=useState();

  const {pathname}=useLocation();
  const pantry=pathname.split("/")[3];

  const viewOrders=useCallback(async()=>{
    try{
      console.log("Pantry Id",pantry);
      const res=await serverProxyWithAuth().get("/user/order?pantryId="+pantry);
      console.log("Orders are fetched",res.data.data);
      setOrders(res.data.data);
    }catch(err){
      console.log(err);
    }
  })
    useEffect(() => {
        viewOrders();
    }, [viewOrders])
  return {orders}

}

//rzp_test_RVHD4e0kj66d25	
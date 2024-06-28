import React, { useCallback, useState } from 'react'
import { serverProxy } from '../index';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export const signup = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState();
  const navigate=useNavigate()

  const accountSignup=[
    {
        placeholder:'Enter your email',
        value:email,
        type:'text',
        onChange:(e)=>setEmail(e.target.value)
    },
    {
        placeholder:'Enter your password',
        value:password,
        type:'password',
        onChange:(e)=>setPassword(e.target.value)
    }
  ]
  const emailSignup=useCallback(async(e)=>{
    e.preventDefault()
    try{
        // console.log(email,password)
        const res=await serverProxy().post('/auth/signup', {email,password})
        // console.log(res)
        toast.success('SignUp Successful')
        navigate('/auth/login')
    }
    catch(e){
        // console.log(e)
        toast.error('SignUp Failed')
    }
  },[email,password])

  return {accountSignup,emailSignup}
}


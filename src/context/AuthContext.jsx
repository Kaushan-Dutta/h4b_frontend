import React,{useContext,createContext,useState,useEffect} from 'react'
import { serverProxyWithAuth } from '../lib/api';

const Data = createContext();

export const AuthProvider = ({children}) => {
  const [auth,setAuth] = useState()
  const loginInfo={
    auth,
    setAuth
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      serverProxyWithAuth().get('/curuser')
      .then(res=>{
        console.log(res.data.user)
        setAuth(res.data.user)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },[localStorage.getItem('token')])
      
  return (
    <Data.Provider value={loginInfo}>
        {children}
    </Data.Provider>
  )
}
export const useAuth = () => {
  return useContext(Data)
}

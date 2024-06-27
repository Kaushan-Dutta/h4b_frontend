import React from 'react'
import axios from 'axios'

export const serverProxy = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL+'api',
  })
}
export const serverProxyWithAuth = () => {
    return axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL+'api',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
}


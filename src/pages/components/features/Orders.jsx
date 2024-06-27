import React from 'react'
import {viewjourney} from '../../../lib/api/users/viewjourney'

const Orders = () => {
  const {orders}=viewjourney();

  return (
    <div>
      {orders?.map((order,index)=>(
        <div key={index}>
          <h1>{order?.hockerId}</h1>
          <h2>{order?.mealId}</h2>
          <h3>{order?.quantity}</h3>
          <h4>{order?.totalPrice}</h4>
        </div>
      ))
      }
    </div>
  )
}

export default Orders
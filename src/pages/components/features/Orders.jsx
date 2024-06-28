import React from 'react'
import {viewjourney} from '../../../lib/api/users/viewjourney'
import GoBack from '../GoBack';

const Orders = () => {
  const {orders}=viewjourney();

  return (
    <div className='p-5  w-2/3'>
      <GoBack/>
      <div className='flex flex-col gap-5 my-8 '>
        <h1 className='text-4xl font-bold'>Orders</h1>
        <div className='flex flex-col gap-5 bg-white rounded-lg p-3'>
          
            <div  className='flex_row justify-between gap-5 '>
              <div className=''>
                <h1 className='text-xl font-bold'>Veg Thali ( Qty: 3 )</h1>
                <p>ML28472</p>
              </div>
              <div className='flex_row gap-5'>
                <p>Rs 124</p>
                <button className='rounded-full px-3 py-1 text-white bg-imp text-sm'>Refund</button>
              </div>
            </div>
        
        </div>
        <div className='flex flex-col gap-5'>
          {orders?.map((order,index)=>(
            <div key={index} className='flex flex-col gap-5'>
              <h1 className='text-xl font-bold'>{order?.name}</h1>
              <p>{order?.description}</p>
              <p>{order?.price}</p>
            </div>
          ))}
        </div>
      </div>
      
      
    </div>
  )
}

export default Orders
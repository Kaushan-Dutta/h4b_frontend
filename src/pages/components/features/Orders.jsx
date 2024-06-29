import React, { useState } from 'react';
import { viewjourney } from '../../../lib/api/users/viewjourney';
import { pantrymeals } from '../../../lib/api/admin/meals'; 
import { useAuth } from '../../../context/AuthContext'; 
import GoBack from '../GoBack';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx"; 

const Orders = () => {
  const { orders } = viewjourney();
  const { mealDetails, addOrder} = pantrymeals(); 
  const { auth } = useAuth();
  const [state, setState] = useState(0);

  const AddOrder = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0 bg-primary bg-opacity-10 fixed z-30 justify-center items-center flex flex-row top-0 left-0">
        <div className="p-5 w-96 rounded-lg bg-white flex flex-col gap-5">
          <div className="flex_row justify-end rounded-lg">
            <button
              onClick={() => {
                setState(0);
              }}
              className="text-xl"
            >
              <RxCross1 />
            </button>
          </div>
          <form onSubmit={addOrder} className="flex flex-col gap-5">
            {mealDetails.map((ele, index) => (
              <input {...ele} key={index} className="w-full" />
            ))}
            <button
              type="submit"
              className="text-white bg-primary text-sm rounded-lg p-3"
            >
              Add Meal
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8">
        <div className="container flex justify-between items-center">
          <h1 className="text-4xl font-bold">Orders</h1>
          <button
            className="flex items-center px-4 py-2 bg-primary text-white rounded"
            onClick={() => setState(1)}
          >
            <IoIosAddCircleOutline className="mr-2" />
            Create Order
          </button>
        </div>

        <div className="flex flex-col gap-5 bg-white rounded-lg p-3">
          <div className="flex_row justify-between gap-5">
            <div>
              <h1 className="text-xl font-bold">Veg Thali (Qty: 3)</h1>
              <p>ML28472</p>
            </div>
            <div className="flex_row gap-5">
              <p>Rs 124</p>
              <button className="rounded-full px-3 py-1 text-white bg-imp text-sm">
                Refund
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {orders?.map((order, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">{order?.name}</h1>
              <p>{order?.description}</p>
              <p>{order?.price}</p>
            </div>
          ))}
        </div>
      </div>
      {state === 1 && <AddOrder />}
    </div>
  );
};

export default Orders;

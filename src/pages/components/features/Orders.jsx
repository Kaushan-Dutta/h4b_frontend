import React, { useState } from "react";
import { viewjourney } from "../../../lib/api/users/viewjourney";
import GoBack from "../GoBack";
import { contribute } from "../../../lib/api/users/contribute";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { makeorder } from "../../../lib/api/users/makeorder";

const Orders = () => {
  const { orders } = viewjourney();
  const { addContribute, contributionDetails, setOrderId, orderId } =
    contribute();
  const [state, setState] = useState(0);
  const { auth } = useAuth();
  const { loading, makeOrder, orderDetails } = makeorder();

  const AddContribute = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed z-30 justify-center items-center flex flex-row top-0 left-0 ">
        <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
          <div className="flex_row justify-end rounded-lg">
            <button
              onClick={() => {
                setOrderId(null);
              }}
              className="text-xl"
            >
              <RxCross1 />
            </button>
          </div>
          <form onSubmit={addContribute} className="flex flex-col gap-5 ">
            {contributionDetails?.map((ele, index) => (
              <input {...ele} key={index} />
            ))}
            <button
              type="submit"
              className="text-white bg-primary text-sm rounded-lg p-3"
            >
              Contribute
            </button>
          </form>
        </div>
      </div>
    );
  };
  const AddOrder = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed  justify-center items-center flex flex-row top-0 left-0 ">
        <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
          <div className="flex_row justify-end rounded-lg">
            <button
              onClick={() => {
                setState(0);
              }}
            >
              <RxCross1 />
            </button>
          </div>
          <form onSubmit={makeOrder} className="flex flex-col gap-5">
            {orderDetails.map((ele, index) =>
              ele.type === "select" ? (
                <select
                  key={index}
                  value={ele.value}
                  onChange={ele.onChange}
                  className="w-full"
                >
                  <option value="" disabled>
                    {ele.placeholder}
                  </option>
                  {ele.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  key={index}
                  type={ele.type}
                  value={ele.value}
                  onChange={ele.onChange}
                  placeholder={ele.placeholder}
                  className="w-full"
                />
              )
            )}
            <button
              type="submit"
              className="text-white bg-primary text-sm rounded-lg p-3"
            >
              Add Order
            </button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <div className="p-5  w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8 ">
        <div className="flex_row justify-between">
          <h1 className="text-4xl font-bold">Your Orders</h1>
          {auth && auth?.role === "user" && (
            <button
              className="rounded-full px-3 py-1 text-white bg-imp text-sm"
              onClick={() => {
                setState(1);
              }}
            >
              Add Order
            </button>
          )}
        </div>

        {orders?.map((order, index) => (
          <div className="flex flex-col gap-5 bg-white rounded-lg p-3">
            <div className="flex_row justify-between gap-5 ">
              <div className="">
                <h1 className="text-xl font-bold">
                  {order?.mealName} ( Qty: {order?.quantity} )
                </h1>
                <p>{order?.mealId}</p>
              </div>
              <div className="flex_row gap-5">
                <p>Rs {order?.totalPrice}</p>
                <button
                  className="rounded-full px-3 py-1 text-white bg-imp text-sm"
                  onClick={() => {
                    setOrderId(order._id);
                  }}
                >
                  Contribute
                </button>
              </div>
            </div>
          </div>
        ))}
        {orderId?<AddContribute />:''}
        {state?<AddOrder />:''}
      </div>
    </div>
  );
};

export default Orders;

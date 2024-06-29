import React from "react";
import GoBack from "../GoBack";
import { refund } from "../../../lib/api/admin/contribute";

const TimeDifference = ({ created }) => {
  const createdAtDate = new Date(created);
  const now = Date.now();
  const difference = now - createdAtDate;

  // Convert difference to a readable format (e.g., days, hours, minutes)
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return (
    <p>
       {hours % 24} hours {minutes % 60} minutes ago
    </p>
  );
};
const Contribute = () => {
  const { contribute } = refund();
  
  return (
    <div className="p-5  w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8 ">
        <div className="flex_row justify-between">
          <h1 className="text-4xl font-bold">Refunds</h1>
        </div>
        {contribute?.view?.map((ele, id) => (
          <div className="flex flex-col gap-5 bg-white rounded-lg p-3">
            <div className="flex_row justify-between gap-5 ">
              <div className="font-ubun">
                <p>Order Id:&nbsp;{ele?.orderId}</p>
                <p>Qty: &nbsp;{ele?.percent}</p>
              </div>
              <TimeDifference created={ele?.createdAt} />
              <div className="gap-3 flex_row text-white text-sm">
                <button onClick={()=>{

                }} className="rounded-md bg-green-600 px-2 py-1">Accept</button>
                <button className="rounded-md bg-red-600 px-2 py-1">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contribute;

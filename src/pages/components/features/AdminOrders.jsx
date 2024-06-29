import React from "react";
import GoBack from "../GoBack";
import { order } from "../../../lib/api/admin/orders";

const AdminOrders = () => {
  const { orders } = order();
  return (
    <div className="p-5  w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8 ">
        <div className="flex_row justify-between">
          <h1 className="text-4xl font-bold">All Orders</h1>
        </div>
        {orders?.map((ele, id) => (
          <div className="flex flex-col gap-5 bg-white rounded-lg p-3">
            <div className="flex_row justify-between gap-5 ">
              <div className="font-ubun">
                <p>{ele?.mealName}</p>

                <p>{ele?._id}</p>
              </div>
              <div className="text-center">
              <p className="p-2 bg-light rounded-full text-center">{ele?.status}</p>
              </div>
              <div className="font-ubun">
                {/* <p>{ele?.pantryId}</p> */}
                <p>Qty:&nbsp;{ele?.quantity}</p>
                <p>Amount:&nbsp;{ele?.totalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;

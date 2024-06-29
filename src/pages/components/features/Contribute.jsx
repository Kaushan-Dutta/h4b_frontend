import React from "react";
import GoBack from "../GoBack";
import { refund } from "../../../lib/api/admin/contribute";

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contribute;

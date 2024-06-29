import React, { useState } from "react";
import GoBack from "../GoBack";
import { order } from "../../../lib/api/admin/orders";
import { RxCross1 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const AdminOrders = () => {
  const { orders } = order();
  const [state, setState] = useState(0);
  const coach = ["S1", "S2", "B1", "B2"];
  
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const category = [
    {
      cate: 'Veg Plate',
      colour: 'text-[#146C94]'
    },
    {
      cate: 'Non Veg Plate',
      colour: 'text-orange-400'
    },
  ];

  const value = [
    {
      coach: 'S1',
      seat: 50,
      cate: 'Veg Plate'
    },
    {
      coach: 'S2',
      seat: 32,
      cate: 'Non Veg Plate'
    },
    {
      coach: 'B1',
      seat: 26,
      cate: 'Non Veg Plate'
    },
    {
      coach: 'B2',
      seat: 10,
      cate: 'Veg Plate'
    },
    {
      coach: 'B1',
      seat: 2,
      cate: 'Veg Plate'
    },
    {
      coach: 'S2',
      seat: 10,
      cate: 'Non Veg Plate'
    },
  ];

  const getSeatCategoryColor = (coach, seat) => {
    const seatInfo = value.find(v => v.coach === coach && v.seat === seat);
    if (seatInfo) {
      const categoryInfo = category.find(c => c.cate === seatInfo.cate);
      return categoryInfo ? categoryInfo.colour : '';
    }
    return 'bg-light text-white'; // default color
  };

  const viewState = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0 bg-primary bg-opacity-10 fixed justify-center items-center flex flex-row top-0 left-0">
        <div className="p-5 w-3/4 rounded-lg bg-white flex flex-col gap-5">
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
          <div className="flex_row gap-3">
            {category.map((obj, id) => (
              <p key={id} className="flex flex-row items-center justify-center gap-5">
                <span className={`rounded-full text-xl ${obj.colour}`}>
                  <GoDotFill />
                </span>
                {obj.cate}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {coach.map((ele, id) => (
              <div key={id} className="flex flex-col gap-3 flex-wrap">
                <p className="text-center rounded-full h-10 w-10 p-2 bg-imp text-white">
                  {ele}
                </p>
                <div className="flex flex-row flex-wrap">
                  {range(1, 50).map((seat) => (
                    <p
                      key={seat}
                      className={`cursor-pointer hover:bg-slate-400 border-[1px] p-1 rounded-sm ${getSeatCategoryColor(ele, seat)}`}
                    >
                      {seat}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8">
        <div className="flex_row justify-between">
          <h1 className="text-4xl font-bold">All Orders</h1>
          <button
            onClick={() => {
              setState(1);
            }}
            className="bg-primary p-2 rounded-full"
          >
            View Seats
          </button>
        </div>
        {orders?.map((ele, id) => (
          <div key={id} className="flex flex-col gap-5 bg-white rounded-lg p-3">
            <div className="flex_row justify-between gap-5">
              <div className="font-ubun">
                <p>{ele?.mealName}</p>
                <p>{ele?._id}</p>
              </div>
              <div className="text-center">
                <p className="p-2 bg-light rounded-full text-center">
                  {ele?.status}
                </p>
              </div>
              <div className="font-ubun">
                <p>Qty:&nbsp;{ele?.quantity}</p>
                <p>Amount:&nbsp;{ele?.totalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {state ? viewState() : ""}
    </div>
  );
};

export default AdminOrders;

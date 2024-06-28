import React, { useState } from "react";
import { pantryHockers } from "../../../lib/api/admin/hockers";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import GoBack from "../GoBack";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Hockers = () => {
  const { hockerDetails, addHocker, hockers } = pantryHockers();
  const pantryId = location.pathname.split("/")[3];
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState(null);
  const [state1,setState1]=useState(0);

  const AddHocker = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed  justify-center items-center flex flex-row top-0 left-0 ">
        <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
          <div className="flex_row justify-end rounded-lg">
            <button
              onClick={() => {
                setState1(0);
              }}
              className="text-xl"
            >
              <RxCross1 />
            </button>
          </div>
          <form onSubmit={addHocker} className="flex flex-col gap-5 ">
            {hockerDetails.map((ele, index) => (
              <input {...ele} key={index} className="w-full" />
            ))}
            <button
              type="submit"
              className="text-white bg-primary text-sm rounded-lg p-3"
            >
              Add Hocker
            </button>
          </form>
        </div>
      </div>
    );
  };
  const QrCodeScan = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed  justify-center items-center flex flex-row top-0 left-0 ">
        <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
          <div className="flex_row justify-end rounded-lg">
            <button
              onClick={() => {
                setState(null);
              }}
              className="text-xl"
            >
              <RxCross1 />
            </button>
          </div>
          <QRCode value={state} renderAs="canvas" size={340}/>
        </div>
      </div>
    );
  };
  return (
    <div className="p-5  w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8 ">
        <div className="flex_row justify-between">
          <h1 className="text-4xl font-bold">Add Hocker</h1>
          {auth && auth?.role === "admin" && (
            <button
              className="rounded-full px-3 py-1 text-white bg-imp text-sm"
              onClick={() => {
                setState1(1);
              }}
            >
              Add Hocker
            </button>
          )}
        </div>
        {hockers?.map((hocker, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 bg-white rounded-lg p-3 cursor-pointer"
          >
            <div className="flex_row justify-between gap-5 ">
              <div className="">
                <h1 className="text-xl font-bold">{hocker?.hockerName}</h1>

                <h1>{hocker?._id}</h1>
              </div>
              <button
                onClick={() => {
                  setState(
                    `${
                      import.meta.env.VITE_APP_CLIENT_URL
                    }placeorder?hockerId=${hocker?._id}`
                  );
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {state?<QrCodeScan />:''}
      {state1?<AddHocker/>:''}
    </div>
  );
};

export default Hockers;

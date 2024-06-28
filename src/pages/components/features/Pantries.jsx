import React, { useState } from "react";
import { pantry } from "../../../lib/api/admin/pantries";
import { Link } from "react-router-dom";
import GoBack from "../GoBack";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Pantries = () => {
  const { pantryDetails, addPantry, pantries } = pantry();
  const { auth } = useAuth();
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  const AddPantry = () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed  justify-center items-center flex flex-row top-0 left-0 ">
        <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
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
          <form onSubmit={addPantry} className="flex flex-col gap-5 ">
            {pantryDetails.map((ele, index) => (
              <input {...ele} key={index} className="w-full" />
            ))}
            <button
              type="submit"
              className="text-white bg-primary text-sm rounded-lg p-3"
            >
              Add Pantry
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
          <h1 className="text-4xl font-bold">Add Pantries</h1>
          {auth && auth?.role === "admin" && (
            <button
              className="rounded-full px-3 py-1 text-white bg-imp text-sm"
              onClick={() => {
                setState(1);
              }}
            >
              Add Pantry
            </button>
          )}
        </div>

        {pantries?.map((pantry, index) => (
          <div className="flex flex-col gap-5 bg-white rounded-lg p-3 cursor-pointer" onClick={()=>{
            navigate(`${pantry?._id}`)
          }} >
            <div className="flex_row justify-between gap-5 ">
              <div className="">
                <h1 className="text-xl font-bold">
                  {pantry?.trainName}( {pantry?.departure} - {pantry?.arrival} )
                </h1>
                <h1>{pantry?._id}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {state == 1 && <AddPantry />}

    </div>
  );
};

export default Pantries;


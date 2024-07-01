import React, { useState } from "react";
import { pantry } from "../../../lib/api/admin/pantries";
import { Link } from "react-router-dom";
import GoBack from "../GoBack";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import FeatureHeader from "../headers/featureHeader";

const Pantries = () => {
  const { pantries } = pantry();
  const { auth } = useAuth();
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="px-5 flex flex-col gap-5 my-8">
      <FeatureHeader
        heading="Pantries"
        subheading="Admin add actions"
        element="Add Pantry"
      />

      {pantries?.map((pantry, index) => (
        <div
          className="flex flex-col gap-5 bg-white rounded-lg px-5 py-3 cursor-pointer"
          onClick={() => {
            navigate(`${pantry?._id}`);
          }}
        >
          <div className="flex_row justify-between gap-5 ">
            <div className="">
              <h1 className="text-xl font-bold">
                {pantry?.trainName}( {pantry?.departure} - {pantry?.arrival} )
              </h1>
              <h1>{pantry?._id}</h1>
            </div>
            <button>
              <IoIosArrowForward className="text-2xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pantries;

import React, { useState } from "react";
import GoBack from "../GoBack";
import { order } from "../../../lib/api/admin/orders";
import { RxCross1 } from "react-icons/rx";
import { CiFilter } from "react-icons/ci";
import FeatureHeader from "../headers/featureHeader";
import SectionTable from "../../template/SectionTable";

const filters = [
  {
    defaultValue: "",
    name: "status",
    options: ["Completed", "Pending"],
  },
  {
    defaultValue: "",
    name: "status",
    options: ["Completed", "Pending"],
  },
  {
    defaultValue: "",
    name: "status",
    options: ["Completed", "Pending"],
  },
];

const AdminOrders = () => {
  const { orders } = order();

  return (
    <div className="px-5 flex flex-col gap-5 my-8">
      <FeatureHeader
        heading="Orders"
        subheading="User Payement actions"
        element="View Seats"
      />
      <div className="rounded-full text-md  bg-white w-fit px-3 flex_row">
        <button className="border-r-2 p-2">
          <CiFilter className="text-xl" />
        </button>
        {filters.map((filter, index) => (
          <select
            key={index}
            defaultValue={filter.defaultValue}
            className="p-2 border-r-2"
          >
            {filter.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>
      <SectionTable
        content={orders}
        excludedColumns={["createdAt", "updatedAt", "__v"]}
      />
    </div>
  );
};

export default AdminOrders;

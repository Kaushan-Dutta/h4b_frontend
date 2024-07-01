import React from "react";
import GoBack from "../GoBack";
import { refund } from "../../../lib/api/admin/contribute";
import FeatureHeader from "../headers/featureHeader";
import SectionTable from "../../template/SectionTable";

const TimeDifference = ({ created }) => {
  const createdAtDate = new Date(created);
  const now = Date.now();
  const difference = now - createdAtDate;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return (
    <p>
      {days} days {hours % 24} hours {minutes % 60} minutes ago
    </p>
  );
};

const Contribute = () => {
  const { contribute } = refund();

  const additionalCols = [
    {
      header: "Time Difference",
      render: (item) => <TimeDifference created={item.createdAt} />,
    },
    {
      header: "Actions",
      render: (item) => (
        <div className="gap-3 flex_row text-white text-sm">
          <button
            onClick={() => {
              // Handle Accept action
            }}
            className="rounded-md bg-green-600 px-2 py-1"
          >
            Accept
          </button>
          <button
            onClick={() => {
              // Handle Reject action
            }}
            className="rounded-md bg-red-600 px-2 py-1"
          >
            Reject
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="px-5 flex flex-col gap-5 my-8">
      <FeatureHeader heading="Return Requests" subheading="User return actions" />
      <SectionTable
        content={contribute?.view}
        excludedColumns={["createdAt", "updatedAt", "__v", "_id"]}
        additionalCols={additionalCols}
      />
    </div>
  );
};

export default Contribute;

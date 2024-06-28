import React, { useState } from "react";
import { createjourney } from "../lib/api/users/createjourney";
// import { redirect } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

{
  /* 
      <div className="bg-red-600">
        Hello
      </div> */
}

{
  /* <div>
        <form onSubmit={addJourney}>
          {journeyDetails.map((ele, index) => (
            <input {...ele} key={index} />
          ))}
          <button type="submit">Add Journey</button>
        </form>
        <button onClick={() => setState(1)}>View Journey</button>
      </div> */
}

const CreateJourney = ({ setState }) => {
  const { journeyDetails, addJourney } = createjourney();
  // const [pantryId, setPantryId] = useState();

  console.log("in Create journey");
  return (
    <div className="flex_row  gap-10 overflow-hidden">
      <div className="h-screen border-2 w-1/3">
        {/* <img src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-white-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
      </div>

      <div className="flex flex-col gap-5 justify-start w-2/3 px-[5rem]">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Enter Journey
          </h2>
          <div className="font-semibold text-black transition-all duration-200 hover:underline">
            Kaushan Dutta
          </div>
        </div>
        <div className="w-3/4">
          <form onSubmit={addJourney}>
            <div className="flex flex-col gap-3">
              {journeyDetails.map((ele, index) => {
                return <input {...ele} key={index} />;
              })}
              <button
                type="submit"
                className=" text-lg rounded-lg bg-imp p-3 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Add Journey
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center m-5">
            <button onClick={() => setState(1)} className="underline">
              Go to existing journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ViewJourney = ({ setState }) => {
  console.log("in View journey");

  const [trainNo, setTrainNo] = useState("");
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    if (trainNo === "") return;
    else navigate(`/user/journey/${trainNo}`);
  };
  return (
    <div>
      {/* View Journey <button onClick={() => setState(0)}>Create Journey</button> */}
      <div className="flex_row  gap-10 overflow-hidden">
        <div className="h-screen border-2 w-1/3">
          <img
            src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-white-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 justify-start w-2/3 p-5">
          <div className="flex flex-col gap-2 w-3/4">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Enter Journey
          </h2>
          <div className="font-semibold text-black transition-all duration-200 hover:underline">
            Kaushan Dutta
          </div>

            <input
              type="text"
              placeholder="Enter the train number"
              value={trainNo}
              onChange={(e) => setTrainNo(e.target.value)}
            />
            <button
              className="text-lg rounded-lg bg-imp p-3 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={redirectToDashboard}
            >
              Go to Dashboard
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
const MakeJourney = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      {state === 0 ? (
        <CreateJourney setState={setState} />
      ) : (
        <ViewJourney setState={setState} />
      )}
    </div>
  );
};

export default MakeJourney;

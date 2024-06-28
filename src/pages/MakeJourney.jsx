import React, { useState } from "react";
import { createjourney } from "../lib/api/users/createjourney";
// import { redirect } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

{/* 
      <div className="bg-red-600">
        Hello
      </div> */}

{/* <div>
        <form onSubmit={addJourney}>
          {journeyDetails.map((ele, index) => (
            <input {...ele} key={index} />
          ))}
          <button type="submit">Add Journey</button>
        </form>
        <button onClick={() => setState(1)}>View Journey</button>
      </div> */}




const CreateJourney = ({ setState }) => {
  const { journeyDetails, addJourney } = createjourney();
  // const [pantryId, setPantryId] = useState();

  console.log("in Create journey")
  return (

    <div className="flex items-center justify-start gap-10 overflow-hidden">

      <div className="h-fit">
        <img src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-white-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>

      <div className="flex flex-col gap-5 justify-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Enter Journey</h2>
          <div className="font-semibold text-black transition-all duration-200 hover:underline">
            Kaushan Dutta
          </div>

        </div>
        <div>
          <form onSubmit={addJourney}>
            <div className="flex flex-col gap-3">
              {journeyDetails.map((ele, index) => {
                return (
                  <input {...ele} key={index} />
                )
              }
              )}
              <button
                type="submit"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add Journey
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center m-5">
            <button onClick={() => setState(1)}>View Journey</button>

          </div>
        </div>
      </div>


    </div>



  );
};
const ViewJourney = ({ setState }) => {
  console.log("in View journey")

  const [trainNo, setTrainNo] = useState("");
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    if (trainNo === "")
      return;
    else
      navigate(`/user/journey/${trainNo}`);
  }
  return (
    <div>
      {/* View Journey <button onClick={() => setState(0)}>Create Journey</button> */}
      <div className="flex items-center justify-start gap-10">

        <div className="h-fit">
          <img src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-white-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className="flex flex-col gap-5 justify-start">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Enter Journey</h2>


            <input type="text" placeholder="Enter the train number" value={trainNo} onChange={(e) => setTrainNo(e.target.value)} />
            <button
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={redirectToDashboard}
            >
              Go to Dashboard
            </button>
          </div>
          <div>
          </div>
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

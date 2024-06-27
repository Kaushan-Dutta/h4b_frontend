import React, { useState } from "react";
import { createjourney } from "../lib/api/users/createjourney";

const CreateJourney = ({ setState }) => {
  const { journeyDetails, addJourney } = createjourney();
  console.log("in Create journey")
  return (
    <div>
      <form onSubmit={addJourney}>
        {journeyDetails.map((ele, index) => (
          <input {...ele} key={index} />
        ))}
        <button type="submit">Add Journey</button>
      </form>
      <button onClick={() => setState(1)}>View Journey</button>
    </div>
  );
};
const ViewJourney = ({setState}) => {
  console.log("in View journey")
  return (
    <div>
      View Journey <button onClick={() => setState(0)}>Create Journey</button>
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

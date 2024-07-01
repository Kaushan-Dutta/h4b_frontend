import React, { useCallback, useState } from "react";
import GoBack from "../GoBack";
import { useAuth } from "../../../context/AuthContext";
import ViewSeat from "../popup/ViewSeat";
import AddPantry from "../popup/AddPantry";
import AddMeal from "../popup/AddMeal";
import AddHocker from "../popup/AddHocker";
import AddOrder from "../popup/AddOrder";

const FeatureHeader = ({ heading, subheading, element }) => {
  const [state, setState] = useState(0);
  const { auth } = useAuth();

  const CheckPop = useCallback(() => {
    switch (element) {
      case "View Seats":
        return auth?.role == "admin" && <ViewSeat setState={setState} />;
      case "Add Pantry":
        return auth?.role == "admin" && <AddPantry setState={setState} />;
      case "Add Meal":
        return auth?.role == "admin" && <AddMeal setState={setState} />;
      case "Add Hocker":
        return auth?.role == "admin" && <AddHocker setState={setState} />;
      case "Add Order":
        return auth?.role==="user" && <AddOrder setState={setState} />;
      default:
        return null;
    }
  }, [element]);

  return (
    <>
      <GoBack />
      <div className="flex_row justify-between">
        <div className="">
          <h1 className="text-4xl ">{heading}</h1>
          <p className="font-ubun text-light">{subheading}</p>
        </div>
        {element ? (
          <button
            onClick={() => {
              setState(1);
            }}
            className="bg-primary text-sm text-white px-2 py-1 rounded-full"
          >
            {element}
          </button>
        ) : (
          ""
        )}
      </div>
      {state === 1 && <CheckPop />}
    </>
  );
};

export default FeatureHeader;

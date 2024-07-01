import { RxCross1 } from "react-icons/rx";
import { pantrymeals } from "../../../lib/api/admin/meals";
const AddMeal = ({setState}) => {
  const { mealDetails, addMeal } = pantrymeals();

  return (
    <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed z-30 justify-center items-center flex flex-row top-0 left-0 ">
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
        <form onSubmit={addMeal} className="flex flex-col gap-5 ">
          {mealDetails.map((ele, index) => (
            <input {...ele} key={index} className="w-full" />
          ))}
          <button
            type="submit"
            className="text-white bg-primary text-sm rounded-lg p-3"
          >
            Add Meal
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddMeal;

import { RxCross1 } from "react-icons/rx";
import { pantryHockers } from "../../../lib/api/admin/hockers";
const AddHocker = ({ setState }) => {
  const { hockerDetails,  handleAddHocker } = pantryHockers();

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
        <form onSubmit={ handleAddHocker} className="flex flex-col gap-5 ">
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
export default AddHocker;

import { RxCross1 } from "react-icons/rx";
import { contribute } from "../../../lib/api/users/contribute";
import { makeorder } from "../../../lib/api/users/makeorder";

const Contribute = () => {
    const { addContribute, contributionDetails, setOrderId, orderId } =
    contribute();
    const { loading, makeOrder, orderDetails } = makeorder();

  return (
    <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed z-30 justify-center items-center flex flex-row top-0 left-0 ">
      <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
        <div className="flex_row justify-end rounded-lg">
          <button
            onClick={() => {
              setOrderId(null);
            }}
            className="text-xl"
          >
            <RxCross1 />
          </button>
        </div>
        <form onSubmit={addContribute} className="flex flex-col gap-5 ">
          {contributionDetails?.map((ele, index) => (
            <input {...ele} key={index} />
          ))}
          <button
            type="submit"
            className="text-white bg-primary text-sm rounded-lg p-3"
          >
            Contribute
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contribute;

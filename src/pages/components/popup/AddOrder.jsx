import { makeorder } from "../../../lib/api/users/makeorder";
import { RxCross1 } from "react-icons/rx";

const AddOrder = ({setState}) => {
    const { loading, makeOrder, orderDetails } = makeorder();

  return (
    <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed  justify-center items-center flex flex-row top-0 left-0 ">
      <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
        <div className="flex_row justify-end rounded-lg">
          <button
            onClick={() => {
              setState(0);
            }}
          >
            <RxCross1 />
          </button>
        </div>
        <form onSubmit={makeOrder} className="flex flex-col gap-5">
          {orderDetails?.map((ele, index) =>
            ele.type === "select" ? (
              <select
                key={index}
                value={ele.value}
                onChange={ele.onChange}
                className="w-full"
              >
                <option value="" disabled>
                  {ele.placeholder}
                </option>
                {ele?.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                key={index}
                type={ele.type}
                value={ele.value}
                onChange={ele.onChange}
                placeholder={ele.placeholder}
                className="w-full"
              />
            )
          )}
          <button
            type="submit"
            className="text-white bg-primary text-sm rounded-lg p-3"
          >
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddOrder;

import { GoDotFill } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const coach = ["S1", "S2", "B1", "B2"];

const range = (start, end) => {
return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const category = [
{
    cate: "Veg Plate",
    colour: "text-[#146C94]",
},
{
    cate: "Non Veg Plate",
    colour: "text-orange-400",
},
];

const value = [
{
    coach: "S1",
    seat: 50,
    cate: "Veg Plate",
},
{
    coach: "S2",
    seat: 32,
    cate: "Non Veg Plate",
},
{
    coach: "B1",
    seat: 26,
    cate: "Non Veg Plate",
},
{
    coach: "B2",
    seat: 10,
    cate: "Veg Plate",
},
{
    coach: "B1",
    seat: 2,
    cate: "Veg Plate",
},
{
    coach: "S2",
    seat: 10,
    cate: "Non Veg Plate",
},
];

const getSeatCategoryColor = (coach, seat) => {
const seatInfo = value.find((v) => v.coach === coach && v.seat === seat);
if (seatInfo) {
    const categoryInfo = category.find((c) => c.cate === seatInfo.cate);
    return categoryInfo ? categoryInfo.colour : "";
}
return "bg-light text-white"; // default color
};
const ViewSeat = ({setState}) => {
    return (
      <div className="w-screen h-screen px-5 md:px-0 bg-primary bg-opacity-10 fixed justify-center items-center flex flex-row top-0 left-0">
        <div className="p-5 w-3/4 rounded-lg bg-white flex flex-col gap-5">
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
          <div className="flex_row gap-3">
            {category.map((obj, id) => (
              <p
                key={id}
                className="flex flex-row items-center justify-center gap-5"
              >
                <span className={`rounded-full text-xl ${obj.colour}`}>
                  <GoDotFill />
                </span>
                {obj.cate}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {coach.map((ele, id) => (
              <div key={id} className="flex flex-col gap-3 flex-wrap">
                <p className="text-center rounded-full h-10 w-10 p-2 bg-imp text-white">
                  {ele}
                </p>
                <div className="flex flex-row flex-wrap">
                  {range(1, 50).map((seat) => (
                    <p
                      key={seat}
                      className={`cursor-pointer hover:bg-slate-400 border-[1px] p-1 rounded-sm ${getSeatCategoryColor(
                        ele,
                        seat
                      )}`}
                    >
                      {seat}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default ViewSeat;

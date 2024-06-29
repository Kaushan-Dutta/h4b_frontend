import React, { useState } from "react";
import { pantryRatings } from "../../../lib/api/admin/ratings";

import GoBack from "../GoBack";


const Ratings = () => {
  const {  ratings } = pantryRatings();



  return (
    <div className="p-5  w-2/3">
      <GoBack />
      <div className="flex flex-col gap-5 my-8 ">
        {ratings?.map((rating, index) => (
          <div className="flex flex-col gap-5 bg-white rounded-lg p-3">
            <div className="flex_row justify-between gap-5 ">
              <div className="">
                <h1 className="text-xl font-bold">
                  {rating.pantryId} ( Rating: {rating.rating} )
                </h1>
                {/* <p>{meal?._id}</p> */}
              </div>
              <div className="flex_row gap-5">
                <button className="rounded-full px-3 py-1 text-white bg-primary text-sm">
                  {rating.review}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;

// {
//   auth?.role === "admin" && (
//     <form onSubmit={addMeal}>
//       {mealDetails.map((ele, index) => (
//         <input {...ele} key={index} />
//       ))}
//       <button type="submit">Add Meal</button>
//     </form>
//   );
// }

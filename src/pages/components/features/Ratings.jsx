import React, { useState } from "react";
import { pantryRatings } from "../../../lib/api/admin/ratings";
import GoBack from "../GoBack";
import SectionTable from "../../template/SectionTable";
import FeatureHeader from "../headers/featureHeader";

const Ratings = () => {
  const { ratings } = pantryRatings();

  return (
    <div className="px-5 flex flex-col gap-5 my-8">
      <FeatureHeader
        heading="Given Ratings"
        subheading="User rating action"
        
      />
      <SectionTable content={ratings} excludedColumns={["createdAt", "updatedAt", "__v","_id","pantryId"]} />
      
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

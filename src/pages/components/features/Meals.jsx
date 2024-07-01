import React, { useState } from "react";
import { pantrymeals } from "../../../lib/api/admin/meals";
import { useAuth } from "../../../context/AuthContext";
import GoBack from "../GoBack";
import SectionTable from "../../template/SectionTable";
import FeatureHeader from "../headers/featureHeader";
const Meals = () => {
  const {  meals } = pantrymeals();
  const { auth } = useAuth();
  const [state, setState] = useState(0);

 
  return (
    <div className="px-5 flex flex-col gap-5 my-8">
    <FeatureHeader
      heading="Meals"
      subheading="Available Meals"
      element="Add Meal"
    />
    
    <SectionTable
      content={meals}
      excludedColumns={["createdAt", "updatedAt", "__v"]}
    />
  </div>
  );
};

export default Meals;

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

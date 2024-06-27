import React from 'react'
import {pantrymeals} from '../../../lib/api/admin/meals'
import { useAuth } from '../../../context/AuthContext';

const Meals = () => {
  const {mealDetails, addMeal, meals}=pantrymeals();
  const {auth} = useAuth();
  return (
    <>
    {auth?.role==='admin' && <form onSubmit={addMeal}>
      {
        mealDetails.map((ele,index)=>(
          <input {...ele} key={index} />
        ))
      }
      <button type="submit">Add Meal</button>
    </form>}
    {meals?.map((meal,index)=>(
      <div key={index}>
        <h1>{meal.mealName}</h1>
        <h2>{meal.mealType}</h2>
        <h3>{meal.mealPrice}</h3>
      </div>
    ))

    }
    </>
  )
}

export default Meals
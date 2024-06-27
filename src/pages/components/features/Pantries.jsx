import React from 'react'
import {pantry} from '../../../lib/api/admin/pantries'
import { Link } from 'react-router-dom';

const Pantries = () => {
  const {pantryDetails, addPantry,  pantries}=pantry();
  return (
    <>
    <form onSubmit={addPantry}>
      {
        pantryDetails.map((ele,index)=>(
          <input {...ele} key={index} />
        ))
      }
      <button type="submit">Add Pantry</button>
    </form>
    {pantries?.map((pantry,index)=>(
      <div key={index}>
        <h1>{pantry?._id}</h1>

        <h1>{pantry?.trainName}</h1>
        <h2>{pantry?.departure}</h2>
        <h3>{pantry?.arrival}</h3>
        <Link to={pantry?._id}>Click Here</Link>
      </div>
    ))

    }
    </>
  )
}

export default Pantries
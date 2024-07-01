import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const GoBack = () => {
  return (
        <button onClick={() => window.history.back()} className='flex_row  gap-5 '><span><FaArrowLeft/></span>Go back</button>
  )
}

export default GoBack
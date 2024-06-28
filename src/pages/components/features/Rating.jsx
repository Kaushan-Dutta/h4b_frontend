import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";  // Correctly importing filled star icon
import { FaRegStar } from "react-icons/fa";  // Importing outlined star icon for unselected state

const RatingOption = () => {
  const [feedback, setFeedback] = useState("");
  const [star, setStar] = useState(0);

  const handleStarClick = (rating) => {
    setStar(rating);
  };

  const rate = [1, 2, 3, 4, 5];

  const submitReview = ()=>{
    if(feedback==="")
      return ;
    else
      alert("Thank you for your feedback");
  }

  return (
    <div className=''>
      <div className=''>
        <div className='p-5 text-black'>
          <p className='font-heading text-lg'>Give Your Feedback</p>
        </div>
        <div className='flex flex-col gap-3 text-black p-5'>

          <div className='flex flex-row items-center space-x-5'>
            <p className='font-heading text-lg'>Rate your view:</p>
            {rate.map((element) => (
              <div key={element} onClick={() => handleStarClick(element)}>
                {star >= element ? (
                  <FaStar className='text-yellow-500 cursor-pointer' />
                ) : (
                  <FaRegStar className='text-gray-300 cursor-pointer' />
                )}
              </div>
            ))}
          </div>

          <div className='border border-primary rounded-lg'>
            <textarea
              className='w-full h-40 bg-transparent outline-none p-3'
              placeholder='Write here...'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          
          <button className='bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition' onClick={submitReview}>
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingOption;

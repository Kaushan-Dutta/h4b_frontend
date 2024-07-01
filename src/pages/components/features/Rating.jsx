import React, { useCallback, useState } from "react";
import { FaStar } from "react-icons/fa";
import GoBack from "../GoBack";
import { FaRegStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { serverProxyWithAuth } from "../../../lib/api";
// import { serverProxyWithAuth } from "../index";
import toast from "react-hot-toast";
import FeatureHeader from "../headers/featureHeader";

const RatingOption = () => {
  const [feedback, setFeedback] = useState("");
  const [star, setStar] = useState(0);
  const location = useLocation();

  const pathname = location.pathname;

  const pantryId = pathname.split("/")[3];

  const handleStarClick = (rating) => {
    setStar(rating);
  };

  const rate = [1, 2, 3, 4, 5];

  const submitReview = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await serverProxyWithAuth().post("/user/rating", {
          pantryId,
          rating: star,
          review: feedback,
        });
        console.log(res);
        toast.success("Rating and Review Added");
        setStar(0);
        setFeedback("");
      } catch (err) {
        console.log(err);
        toast.error("Rating and Review Not Added");
      }
    },
    [pantryId, star, feedback]
  );

  return (
    <div className="px-5 flex flex-col gap-5 my-8">
      <FeatureHeader heading="Give Ratings" subheading="User rating action" />

        <div className="flex flex-col gap-3 text-black ">
          <div className="flex flex-row items-center space-x-5">
            <p className="font-heading text-lg">Rate your experience:</p>
            {rate.map((element) => (
              <div key={element} onClick={() => handleStarClick(element)}>
                {star >= element ? (
                  <FaStar className="text-yellow-500 cursor-pointer" />
                ) : (
                  <FaRegStar className="text-gray-300 cursor-pointer" />
                )}
              </div>
            ))}
          </div>

          <div className="border border-primary rounded-lg">
            <textarea
              className="w-full h-40 bg-transparent outline-none p-3"
              placeholder="Write here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <button
            className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition"
            onClick={submitReview}
          >
            Submit Feedback
          </button>
        </div>
      </div>
  );
};

export default RatingOption;

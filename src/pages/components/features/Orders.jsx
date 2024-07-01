import React, { useState } from "react";
import { viewjourney } from "../../../lib/api/users/viewjourney";
import GoBack from "../GoBack";
import { contribute } from "../../../lib/api/users/contribute";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { makeorder } from "../../../lib/api/users/makeorder";
import FeatureHeader from "../headers/featureHeader";
import SectionTable from "../../template/SectionTable";
import Contribute from "../popup/Contribute";

const Orders = () => {
  const { orders } = viewjourney();
  
  const [state, setState] = useState(0);
  const { auth } = useAuth();

  const { addContribute, contributionDetails, setOrderId, orderId } =
  contribute();
  return (
    <div className="px-5 flex flex-col gap-5 my-8">
      <FeatureHeader
        heading="Your Orders"
        subheading="User order action"
        element="Add Order"
      />

     <SectionTable content={orders} excludedColumns={['createdAt','updatedAt','__v','_id','pantryId','hockerId','email']} additionalCols={[ 
       {
        header:'Contribute',
        render:(item)=>{
          return(
            <div className="rounded-full px-3 py-1 text-white bg-imp text-sm w-fit"  onClick={() => {
              setOrderId(item._id);
            }} >Contribute</div>
          )
        }
       }]}/>
      {orderId ? <Contribute setOrderId={setOrderId}/> : ""}
    </div>
  );
};

export default Orders;


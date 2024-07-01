import React, { useState } from "react";
import { pantryHockers } from "../../../lib/api/admin/hockers";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import GoBack from "../GoBack";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FeatureHeader from "../headers/featureHeader";
import SectionTable from "../../template/SectionTable";
const Hockers = () => {
  const {  hockers } = pantryHockers();
  const pantryId = location.pathname.split("/")[3];
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [state,setState]=useState(0);


  return (
    <div className="px-5 flex flex-col gap-5 my-8">
        <FeatureHeader
          heading="Hockers"
          subheading="Admin actions"
          element="Add Hocker"
        />
        <SectionTable content={hockers} excludedColumns={['createdAt','updatedAt','__v','pantryId']} additionalCols="View Qr" />
    </div>
  );
};

export default Hockers;


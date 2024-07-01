import React, { useState,useCallback } from "react";
import { pantryHockers } from "../../../lib/api/admin/hockers";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FeatureHeader from "../headers/featureHeader";
import SectionTable from "../../template/SectionTable";

const Hockers = () => {
  const {  hockers } = pantryHockers();

  const [qrState, setQrState] = useState();

  const QrCodeScan = useCallback(() => {
    console.log("Hocjers qr state",qrState)
    return (
      <div className="w-screen h-screen px-5 md:px-0 bg-primary bg-opacity-10 fixed justify-center items-center flex flex-row top-0 left-0">
        <div className="p-5 w-96 rounded-lg bg-white flex flex-col gap-5">
          <div className="flex_row justify-end rounded-lg">
            <button
              onClick={() => {
                setQrState(null);
              }}
              className="text-xl"
            >
              <RxCross1 />
            </button>
          </div>
          <QRCode value={qrState} renderAs="canvas" size={340} />
        </div>
      </div>
    );
  }, [qrState,setQrState]);

  return (
    <div className="px-5 flex flex-col gap-5 my-8">
        <FeatureHeader
          heading="Hockers"
          subheading="Admin actions"
          element="Add Hocker"
        />
        <SectionTable content={hockers} excludedColumns={['createdAt','updatedAt','__v','pantryId']} additionalCols={[
          {
            header:'View Qr',
            render:(item)=>{
              return(
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"  onClick={() => {
                  setQrState(
                    `${
                      import.meta.env.VITE_APP_CLIENT_URL
                    }placeorder?hockerId=${item?._id}`
                  );
                }} >View Qr</div>
              )
            }
          }
        ]} />
        {qrState ? <QrCodeScan /> : null}

    </div>
  );
};

export default Hockers;


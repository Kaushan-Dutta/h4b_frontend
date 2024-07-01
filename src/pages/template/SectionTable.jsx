import React,{useCallback, useState} from "react";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../context/AuthContext";
import QRCode from "qrcode.react";

const SectionTable = ({ content ,excludedColumns,additionalCols}) => {
  // Function to extract keys from the first item of content array
  const getKeys = () => {
    if (!content || content.length === 0) return [];
    return Object.keys(content[0]);
  };

  const keys = getKeys();
  const filteredKeys=keys.filter(ele=>!excludedColumns?.includes(ele))

  const [qrState,setQrState]=useState();
  const {auth}=useAuth();

  const QrCodeScan =useCallback( () => {
    return (
      <div className="w-screen h-screen px-5 md:px-0  bg-primary bg-opacity-10 fixed  justify-center items-center flex flex-row top-0 left-0 ">
        <div className="p-5 w-96 rounded-lg  bg-white flex flex-col gap-5">
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
          <QRCode value={qrState} renderAs="canvas" size={340}/>
        </div>
      </div>
    );
  },[setQrState]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {filteredKeys?.map((key, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {key}
              </th>
              
            ))}
            {additionalCols && <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {additionalCols}
            </th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {content?.map((item, id) => (
            <tr key={id} className="hover:bg-gray-100">
              {filteredKeys?.map((key, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {item[key]}
                </td>
              ))}
              {additionalCols=='View Qr' && auth?.role=='admin' && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"  onClick={() => {
                  setQrState(
                    `${
                      import.meta.env.VITE_APP_CLIENT_URL
                    }placeorder?hockerId=${item[_id]}`
                  );
                }}>View Qr</td>}
            </tr>
          ))}

        </tbody>
      </table>
      {qrState?<QrCodeScan />:''}

    </div>
  );
};

export default SectionTable;

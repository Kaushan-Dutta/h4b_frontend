import React from 'react'
import {pantryHockers} from '../../../lib/api/admin/hockers'
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

const Hockers = () => {
  const {hockerDetails, addHocker, hockers}=pantryHockers();
  const pantryId = (location.pathname.split("/"))[3]; 
  return (
    <>
    <form onSubmit={addHocker}>
      {
        hockerDetails.map((ele,index)=>(
          <input {...ele} key={index} />
        ))
      }
      <button type="submit">Add Hocker</button>
    </form>
    {hockers?.map((hocker,index)=>(
      <div key={index}>
        <h1>{hocker?._id}</h1>

        <h1>{hocker?.hockerName}</h1>
        <QRCode value={`${import.meta.env.VITE_APP_CLIENT_URL}placeorder?hockerId=${hocker?._id}`} renderAs="canvas" />

      </div>
    ))

    }
    </>
  )
}

export default Hockers
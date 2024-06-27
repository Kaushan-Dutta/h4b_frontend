import React from 'react'
import QRCode from 'qrcode.react';

const Dashboard = () => {
  return (
    <QRCode value="https://localhost:5173/admin/39043084" renderAs="canvas" />
  )
}

export default Dashboard
//https://localhost:5173/makeorder?pantryId=19289&hockerId=84048
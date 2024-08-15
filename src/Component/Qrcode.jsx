import React, { useState } from 'react'


const Qrcode = () => {
  async function generateqr (){
   setloading(true) ;
   try{
const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}*150&data=${encodeURIComponent(qrdata)}`;
setimg(url);
   }catch(error){ console.error("Error generating Qrcode",error)}
   finally{
    setloading(false)
   }
  }
   const downloadQRCode = () => {
   fetch (img)
    .then((response)=>response.blob())
  .then((blob)=>
    {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'qrcode.png'; // Name of the file to download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the anchor element
    })
  };

  const [qrdata,setqrdata]=useState("saravanan")
 const [img,setimg]=useState()
 const [loading,setloading]=useState(false)
 const [size,setsize]=useState("150")
  return (
   <div className='head'>
    <h1>QrCode Generater</h1>
{ loading && <p>Please wait.....</p>}
    <div className='imgdiv'>{img &&<img className='img' src={img}  />}</div>
    <br></br>
    <div className='lab'>
       <label htmlFor="input">Data For QR Code :</label>
    <input className='data' type="text" value={qrdata}  placeholder="Enter Data For QR Code"  onChange={(e)=>setqrdata(e.target.value)}/>
    <label className='size' htmlFor="lname">Image size eg(150) :</label>
    <input type="text"  value={150} placeholder="Enter Image Size" onChange={(e)=>setsize(e.target.value)}/>
    <button className='generate' onClick={generateqr}>Generate Qr code</button>
    <button className='download' onClick={downloadQRCode}>Download Qr code</button>
    </div>
    <p>Designed by Saravanan.</p>

   
   </div>
  )
}

export default Qrcode

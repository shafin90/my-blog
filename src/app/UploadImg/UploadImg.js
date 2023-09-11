'use client'
import React, { useContext, useState } from 'react';
import { authContext } from '../layout';

const UploadImg = () => {
  const {img,setImg} = useContext(authContext);

  // Function to handle image selection

      

      // You can also upload the selected image to the server here
      // Use a fetch request or any other method to send the image to the server
    
  return (
    <div className=' mb-3'>
      {/* File input for image upload */}
      <input type="text"  onChange={(e)=>setImg(e.target.value)} />

      {/* Display the selected image (optional) */}
      {img && (
        <div>
          <p>Selected Image:</p>
          <img src={img} alt="Selected" width="200" />
        </div>
      )}
    </div>
  );
};

export default UploadImg;

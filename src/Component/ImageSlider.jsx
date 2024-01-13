import React, { useEffect, useState } from 'react';
import ImgSliderCard from './ImgSliderCard';

const ImageSlider = () => {
//  const [imgSlider, setImgSlider] = useState([])   || []
//  useEffect(() =>{
//   fetch('http://localhost:5000/room')
//   .then(res => res.json())
//   .then(data => {
//    console.log(data)
//    setImgSlider(data)
//   }
//    )


 return (
  <div>
  <div className='w-[90%] mx-auto my-5'>
    <h1 className='text-5xl font-semibold text-amber-500 text-center my-16'>Featured Room</h1>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-5'>
    {/* {
     imgSlider?.map((img) =><ImgSliderCard key={img._id} img={img}></ImgSliderCard>)
    } */}
  </div>
  </div>
  </div>
 );
};

export default ImageSlider;
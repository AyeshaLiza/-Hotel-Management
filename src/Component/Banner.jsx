import React from 'react';
import Navbar from './Navbar';
import parav1 from '../assets/banner/parav1.mp4'
import { useLocation } from 'react-router-dom';
import newBanner from '../assets/New folder/newBannner.jpg';
import img from '../assets/New folder/img.jpg';
import Plx from 'react-plx';


const Banner = () => {
  return (
    <>
   
      <div className='relative w-full h-[600px]'>
        <img className='w-full h-[500px]' src={img} alt="" />
      </div>
      <div className='text-white absolute left-24 bottom-40 max-w-lg'>
        <h1 className='text-5xl pb-8 font-semibold'>
          Experience Tranquility and Elegance
        </h1>
        <p className=''>

          Indulge in the art of hospitality at Luxe Horizon Hotel, where luxury meets comfort. Nestled in the heart of [City Name], our hotel invites you to a world of sophistication and serenity.
        </p>
      </div>
    </>
  );
};

export default Banner;
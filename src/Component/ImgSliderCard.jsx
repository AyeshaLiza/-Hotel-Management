import React from 'react';
import { Link } from 'react-router-dom';

const ImgSliderCard = ({img}) => {
 const { _id, button, detail, roomImg, title} = img || []
 // const { descr } = detail || []

 return (
  <div>
   <div className="card w-72  bg-base-100  shadow-xl">
  <figure className='relative '><img className='h-60' src={roomImg} alt="Room" /></figure>
   <Link to={'/login'}>
   <button  className='card-title text-white  absolute bottom-0 right-5'>Book Now</button>
   </Link>

</div>
  </div>
 );
};

export default ImgSliderCard;
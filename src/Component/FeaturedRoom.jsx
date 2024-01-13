import React, { useEffect, useState } from 'react';
import FeaturedRoomCard from './FeaturedRoomCard';
// import ImgSliderCard from './ImgSliderCard';


const FeaturedRoom = () => {
const [featuredRoom, setFeaturedRoom] = useState([])   || []
useEffect(() =>{
 fetch('http://localhost:5000/api/v1/room')
 .then(res => res.json())
 .then(data => {
  console.log(data)
  setFeaturedRoom(data)
  
 }
  )
},[])
 return (
  <div data-aos="fade-right" >
  <div className=' mx-auto my-5'>
    <h1 className='text-5xl font-semibold text-amber-500 text-center my-16'>Featured Room</h1>
    

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
    {
     featuredRoom?.map((featured) =>
     <FeaturedRoomCard key={featured._id} featured ={featured}></FeaturedRoomCard>
     )
    
    }
  </div>
  </div>
  </div>
 );
};

export default FeaturedRoom;
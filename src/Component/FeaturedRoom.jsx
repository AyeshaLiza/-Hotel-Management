import React, { useEffect, useState } from 'react';
import FeaturedRoomCard from './FeaturedRoomCard';
// import ImgSliderCard from './ImgSliderCard';
import Container from '../MainLayout/Container'
import ReactTab from './ReactTab';

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
  <Container> 
  <div >
  <div className=' mx-auto my-5'>
    <h1 className='text-5xl font-semibold text-amber-500 text-center my-16'>Featured Room</h1>
<ReactTab></ReactTab>

    <div  className='grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
    {
     featuredRoom?.map((featured) =>
     <FeaturedRoomCard key={featured._id} featured ={featured}></FeaturedRoomCard>
     )
    
    }
  </div>
  </div>
  </div>
  </Container>
 );
};

export default FeaturedRoom;
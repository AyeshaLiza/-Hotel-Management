import React, { useEffect, useState } from 'react';
import useRoom from '../Router/Booking/useRoom';

const RoomSummary = () => {
 const { room } = useRoom()
 const { data } = room   ||  {}
//  console.log(room);
const [roomSummary, setRoomSummary] = useState() || []


 const {title, roomImg, detail} = data || {}
 const {descr, pricePerNight, discount} = detail || {}
 useEffect(() => {
  fetch(`http://localhost:5000/api/v1/roomBookings`)
   .then(res => res.json())
   .then(data => {
    console.log(data)
    setRoomSummary(data)
   }
   )
 }, [])
 return (
  <div>
{/* <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white">{title}</h2>
      <div>
      <p className="">{pricePerNight}</p>
      <p className="">{discount}</p>
      </div>
    <p>{descr}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div> */}

  </div>
 );
};

export default RoomSummary;
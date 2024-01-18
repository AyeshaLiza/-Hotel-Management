import DatePicker from "react-datepicker";

import { useState } from 'react';
import { Link } from 'react-router-dom';

const SeatCard = ({ seat }) => {
 const { _id, img, roomNo } = seat


 return (
  <>
   <div className="card lg:w-80 rounded-lg mx-auto shadow-xl shadow-zinc-400">
    <h2 className="card-title">{roomNo}</h2>
    <div className="">
     <figure><img className='rounded-lg h-60' src={img} alt="Room" /></figure>


      {/* <div className='card-body'>
      <p className="card-title py-1 card-actions">Choose your date:</p>

 <DatePicker className="border border-black rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />

 <div className="card-actions justify-end">
   <Link to={`/roomorder/${_id}`}>
     <button className="btn  btn-outline  ">Book Now</button>
   </Link>
</div>
      </div> */}
    </div>

   </div>
  </>
 );
};

export default SeatCard;
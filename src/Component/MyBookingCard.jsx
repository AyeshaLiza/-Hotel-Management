import React from 'react';
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';

const MyBookingCard = ({ booking, handleDlt }) => {
  const { _id, title, roomImg, pricePerNight, roomSize,email, name, date, avail } = booking || {}
  return (
    <>
      {/* row 1 */}
      <tr className=''>
        <th>
        <button onClick={() => handleDlt(_id)} className="btn  btn-sm btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
      <td className='flex items-center my-auto'>
      <div className="avatar gap-4">
        <div className="rounded w-24   ">
          <img src={roomImg} />
        </div>
 
      <div className='py-12'>
        <div className="font-bold ">{title}</div>
        <div className="text-sm opacity-50">{date}</div>
      </div>
    </div>
  </td>
        <td>
          {name}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{pricePerNight}</td>
        <td>{roomSize}</td>
        <th>
       
          <Link to={`/update/${_id}`}>
      <button className="btn btn-outline">
      <GrUpdate />
      </button>
      </Link>
        </th>
      </tr>
   
</>
  
  );
};

export default MyBookingCard;
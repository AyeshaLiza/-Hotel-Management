import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Shower,
  Users,
} from "phosphor-react";
import DatePicker from "react-datepicker";

import { Button, Card } from "keep-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const RoomDetailCard = ({ filtered }) => {

  const { _id, roomImg, detail, button, title } = filtered || []
  const { pricePerNight, roomSize, availability, specialOffers, promoCode, discount, descr, } = detail || []
  const { offer1, offer2 } = specialOffers || []
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className="rounded-lg h-96 " src={roomImg} alt="room" /></figure>
        <div className="card-body space-y-3  max-w-2xl">
          <h2 className="text-md pt-4">🎁 🎉{offer1}</h2>
          <h2 className="text-md">🎁 🎉{offer2}</h2>
          <h2 className="text-lg card-title "> <span>Room Size: {roomSize}</span></h2>
          <h2 className="card-title text-3xl"> {pricePerNight}/Night</h2>
          <p className="max-w-lg">{descr}</p>
        
            <div>
            <p className="card-title py-1">Choose your date:</p>
          <DatePicker className="border border-black rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} /> 
              </div> 
          <div className="card-actions justify-end">
            <Link to={`/roomorder/${_id}`}>
              <button className="btn  btn-outline btn-warning ">Book Now</button>

            </Link>
          </div>
          </div>
        
      </div>
    </div>
  );
};

export default RoomDetailCard;
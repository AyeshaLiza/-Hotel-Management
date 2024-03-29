

import {  useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import RoomSummary from "./RoomSummary";
import Review from "./Review";
import ShowReview from "./ShowReview";

const RoomDetailCard = ({ filtered }) => {
  const { user, loading } = useContext(AuthContext)
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(false)

  const { _id, roomImg, detail, title, availableSeat } = filtered || {}
  const { pricePerNight, roomSize, specialOffers, descr, } = detail || {}
  const { offer1, offer2 } = specialOffers || {}
  const [showReview, setShowReview] = useState('')
  const [newDate, setNewDate] = useState(new Date());

 
  
  // Date Change
  const handleDateSelect = selectedDate => {
  }
  const handleDateChange = selectedDate => {
    setNewDate(selectedDate)
  }
  const changedDate = newDate?.toLocaleDateString()

  const [summary, setSummary] = useState({
    email: user?.email,
    name: user?.displayName,
    roomTitle: title,
    roomImage: roomImg,
    roomPrice: pricePerNight,
    roomSize: roomSize,
    roomDetail: descr
  })
 

  // handle Confirm
  const handleConfirm = () => {
    // console.log(summary);
    const newData = { ...summary, changedDate }
    console.log(newData);
    //  post to Booking Collection
    fetch(`http://localhost:8000/api/v1/roomBookings/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        setShowReview(data)
        
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'success!',
            text: 'Room Booked Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }

      }
      )
  }
  return (
    <div>
      <h1 className="text-center text-5xl text-amber-400 font-semibold">{title}</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className="rounded-lg h-96 " src={roomImg} alt="room" /></figure>
        <div className="card-body   max-w-2xl">
          <div className="flex justify-between">
            <div className="space-y-3">
              <h2 className="text-md pt-4">🎁 🎉{offer1}</h2>
              <h2 className="text-md">🎁 🎉{offer2}</h2>
              <h2 className=" "> <span>Room Size: {roomSize}</span></h2>
          <h2 className=""> {pricePerNight}/Night</h2>
             
              
            </div>
            <div className="space-y-3">
           
         
          {loading ?  <span className="loading loading-ring loading-md"></span>  :
          <div>
          {availableSeat === 0 ? <p className="font-semibold">No Available Seat</p> :  <h2 className="text-lg card-title "> <span>Available Seat: {availableSeat}</span></h2>}
          </div>  
          }
          

          <p className="card-title py-1 card-actions">Choose your date: {newDate?.toLocaleDateString()}</p>
          <DatePicker
          className="border rounded-lg"
            selected={newDate}
            onSelect={handleDateSelect} //when day is clicked
            onChange={handleDateChange} //only when value has changed
          />
        

            </div>
          </div>
         
 <div className="card-actions justify-end">
          <button className="btn btn-outline " onClick={() => {user?.email ? document.getElementById('my_modal_5').showModal()  : navigate('/login')}}>Book Room</button>
        </div>

        </div>
      </div>
      <p className="px-14 mx-auto ">{descr}</p>

              <div className="w-[700px] ml-20 my-5" >
                <hr />
              <div className="rating rating-md ">
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400 " checked /> <h1 className="px-2">5 Star</h1>
              </div>
            <ShowReview></ShowReview>
          {showReview  &&  <Review title={title}></Review>}
          </div>

  
       <RoomSummary my_modal_5={'my_modal_5'} summary={summary} changedDate={changedDate} handleConfirm={handleConfirm}></RoomSummary>
       
    </div>
  );
};

export default RoomDetailCard;
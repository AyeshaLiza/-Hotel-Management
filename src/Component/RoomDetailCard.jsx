import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Shower,
  Users,
} from "phosphor-react";

import { Button, Card } from "keep-react";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SeatCard from "./SeatCard";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const RoomDetailCard = ({ filtered }) => {

  const { _id, roomImg, detail, title, availableSeat } = filtered || {}
  const { pricePerNight, roomSize, specialOffers, descr, } = detail || {}
  const { offer1, offer2 } = specialOffers || {}
  const [seats, setSeat] = useState([]) 
  const [summary, setSummary] = useState([]) 
  const [newDate, setNewDate] = useState(new Date());
  const { user } = useContext(AuthContext)

    // Room Seat fetching
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/seats`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setSeat(data)
      }
      )
  }, [])

  // Date Change
  const handleDateSelect = selectedDate =>{
        // console.log(selectedDate);
  }
  const handleDateChange = selectedDate =>{
        console.log(selectedDate);
        setNewDate(selectedDate)
  }
const changedDate = newDate?.toLocaleDateString()

  // making Room Summary
  useEffect(() => {
    const email = user?.email
    const name = user?.displayName
    const bookingInfo = {
      email, name, changedDate, title, roomImg, pricePerNight, roomSize, descr,
    }
    console.log(newDate);

    setSummary(bookingInfo)
  }, [])

  // handle Confirm
  const handleConfirm = () => {
console.log(summary);
const newDate = {...summary, changedDate}
console.log(newDate);
    //  post to Booking Collection
    fetch(`http://localhost:5000/api/v1/roomBookings/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newDate)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className="rounded-lg h-96 " src={roomImg} alt="room" /></figure>
        <div className="card-body space-y-3  max-w-2xl">
          <h2 className="text-md pt-4">🎁 🎉{offer1}</h2>
          <h2 className="text-md">🎁 🎉{offer2}</h2>
          <div className="flex justify-between">
            <h2 className="text-lg card-title "> <span>Room Size: {roomSize}</span></h2>
            <h2 className="text-lg card-title "> <span>Available Seat: {availableSeat}</span></h2>
          </div>
          <h2 className="card-title text-3xl"> {pricePerNight}/Night</h2>
          <p className="max-w-lg">{descr}</p>
          <p className="card-title py-1 card-actions">Choose your date: {newDate?.toLocaleDateString()}</p>

          <DatePicker
            selected={newDate}
            onSelect={handleDateSelect} //when day is clicked
            onChange={handleDateChange} //only when value has changed
          />
          
         

          <div className="card-actions justify-end">
            {/* <button className="btn btn-outline" onClick={handleBooking}>
    Book Room
  </button> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Room</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
              <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                {
                  summary && <>

                    <h1>Your Room: {summary.title}</h1>
                    <h1>Date: {changedDate}</h1>

                    <h3 className="font-bold text-lg">{summary.pricePerNight}</h3>
                    <p className="py-4">{summary.descr}</p>

                  </>
                }
                <div className="modal-action">
                  <form method="dialog" className="">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleConfirm} className="btn">Comfirm Booking</button>
                  </form>
                </div>

              </div>
            </dialog>

          </div>

        </div>
      </div>


      <div className="grid lg:grid-cols-3 my-9 md:grid-cols-2 max-w-[85%] mx-auto grid-cols-1 gap-3 ">
        {
          seats?.map(seat =>
            <SeatCard key={seat._id} seat={seat}></SeatCard>
          )
        }
      </div>
    </div>
  );
};

export default RoomDetailCard;
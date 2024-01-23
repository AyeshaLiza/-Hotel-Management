import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useRoom from './Booking/useRoom.jsx';
import Swal from 'sweetalert2';
import Review from '../Component/Review.jsx';

const RoomOrder = () => {
  const { user } = useContext(AuthContext)
  const { room } = useRoom()
  const { data } = room || {}
  const { title, roomImg, detail } = data || {}
  const { pricePerNight, descr, discount, roomSize, availability } = detail || {}

  const [showReview, setShowReview] = useState(false)


  const handleRoomOrderForm = e => {

    e.preventDefault();
    const email = user?.email || 'not Given'
    const name = user?.displayName || 'not Given'
    const date = e.target.date.value || 'not Given'
    const roomOrder = {
      email, name, date, title, roomImg, pricePerNight, discount, roomSize, availability, descr
    }
    // console.log(roomOrder);
    fetch('http://localhost:8000/api/v1/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(roomOrder)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Room Booked Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

          setShowReview(true)
        }
      }
      )
  }
  return (
    <>
   
      <div className="hero min-h-screen bg-amber-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-w-lg shadow-xl space-y-5  p-10 shadow-slate-300 lg:text-left">
            <div className='text-center text-5xl font-semibold my-5'>
              <h1>{title}</h1>
            </div>
            <p className='text-3xl font-semibold'>
              {pricePerNight}/Night
            </p>
            <p className='flex justify-between'>

              {roomSize}
            </p>
            <p className='py-3'>{descr}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-amber-100">
            <form onSubmit={handleRoomOrderForm} className="card-body">
              <div className=' gap-8'>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
              </div>

              <div className='md:flex gap-8'>
                <div className="form-control w-full lg:max-w-1/2 ">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input type="date" name="date" className="input input-bordered" required />
                </div>

              </div>
              <div className='md:flex gap-8'>

              </div>

              <div className="form-control mt-6">
                <button className="btn btn-warning">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        {
          showReview && <Review></Review>
        }
    </>
  );
};

export default RoomOrder;
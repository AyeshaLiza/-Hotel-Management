import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import useRoom from './Booking/useRoom.jsx';
import Swal from 'sweetalert2';
// import RoomSummary from '../Component/RoomSummary.jsx';

const RoomOrder = () => {
  const { user } = useContext(AuthContext)
  const { room } = useRoom()
  const { data } = room  ||   {}
  const {title, roomImg, detail} = data || {}
  const {pricePerNight, descr, discount, roomSize, availability} = detail || {}
  


  const handleRoomOrderForm = e => {

    e.preventDefault();
    const email = user?.email || 'not Given'
    const name = user?.displayName || 'not Given'
    const date = e.target.date.value || 'not Given'
    const roomOrder = {
      email, name, date, title, roomImg, pricePerNight,discount, roomSize, availability, descr
    }
    // console.log(roomOrder);
    fetch('http://localhost:5000/api/v1/bookings', {
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
          {/* The button to open modal */}
<a href="#my_modal_8" className="btn">open modal</a>
{/* Put this part before </body> tag */}
<div className="modal" role="dialog" id="my_modal_8">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Give a Review</h3>
    <p className="py-4">This modal works with anchor links</p>
    <div className="modal-action">
     <a href="#" className="btn">Yay!</a>
    </div>
  </div>
</div>
        }
      }
      )
  }
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center max-w-lg shadow-xl space-y-5  p-10 shadow-slate-300 lg:text-left">
    <div className='text-center text-5xl font-semibold my-5'>
        <h1>{title}</h1>
      </div>
     <p className='text-3xl font-semibold'>
     {pricePerNight}/Night
     </p>
      <p className='flex justify-between'>
      {availability}
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
    <div>
      
      {/* <div className="card flex-shrink-0 w-full max-w-5xl mx-auto shadow-2xl bg-amber-100">
        <form onSubmit={handleRoomOrderForm} className="card-body">
          <div className='md:flex gap-8'>
          <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
          </div>
          <div className="form-control w-full max-w-1/2">
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
          <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Price Per Night</span>
            </label>
            <input type="text" name="pricePerNight" defaultValue={pricePerNight} className="input input-bordered" required />

          </div>
         </div>
         <div className='md:flex gap-8'>
         
          <div className="form-control w-full lg:max-w-1/2">
            <label className="label">
              <span className="label-text">Room Size</span>
            </label>
            <input type="text" name="roomSize" defaultValue={roomSize} className="input input-bordered" required />

          </div>
          <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Availability</span>
            </label>
            <input type="text" name="avail" defaultValue={availability} className="input input-bordered" required />

          </div>
         </div>
         <div className='md:flex gap-8'>
         
         <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea type="text" name="descr"  defaultValue={descr} className="textarea textarea-bordered " required />
           
          </div>
         </div>
         
          
          <div className="form-control mt-6">
            <button className="btn btn-warning">Confirm Booking</button>
          </div>
        </form>
      </div> */}
    </div>
    </>
  );
};

export default RoomOrder;
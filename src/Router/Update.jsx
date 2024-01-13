import React, { useContext } from 'react';
import useRoom from './Booking/useRoom';
import { AuthContext } from '../Provider/AuthProvider';
import useBooking from '../Hook/useBooking';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
 const {user}  = useContext(AuthContext)
 const {id}  = useParams()
 const handleUpdate  = e  =>{
  e.preventDefault()
  const form  = e.target;
  const name  = form.name.value;
  const email  = form.email.value;
  const date  = form.date.value;
  const updateBooking  = {name, email, date}
  fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
   method: 'PUT',
   headers: {
     'content-type': 'application/json'
   },
   body: JSON.stringify(updateBooking)
 })
 .then((res) =>res.json())
 .then(data =>{
  
  if (data.modifiedCount > 0) {
   Swal.fire({
    title: 'success!',
    text: 'Data Updated Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
  }}
  )
 }
 return (
  <div>
     <div className='text-center text-5xl font-semibold my-5'>
        <h1>Update Booking: for </h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-5xl mx-auto shadow-2xl bg-amber-100">
        <form onSubmit={handleUpdate} className="card-body">
          <div className='flex gap-8'>
          <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered"  />
          </div>
          <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered"  />
          </div>
          </div>

         <div className='flex gap-8'>
         <div className="form-control w-full max-w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" required />
          </div>
         
         </div>
          
          <div className="form-control mt-6">
            <button className="btn btn-warning">Update Booking</button>
          </div>
        </form>
      </div>
  </div>
 );
};

export default Update;